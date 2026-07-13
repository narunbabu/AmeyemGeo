import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { captureLead } from "./leads";

// Lightweight lead schema for download / purchase / demo intents. Email is
// optional so an anonymous download can still be counted; everything is captured.
const leadSchema = z.object({
  type: z.string().min(1).max(40),
  edition: z.string().max(40).optional(),
  email: z.string().email().max(200).optional(),
  name: z.string().max(200).optional(),
  company: z.string().max(200).optional(),
  message: z.string().max(4000).optional(),
  source: z.string().max(400).optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);

      // Create contact record (in-memory index for the admin endpoint)
      const contact = await storage.createContact(validatedData);

      // Persist durably (survives restart) AND notify the team (webhook / SMTP).
      await captureLead({
        kind: "contact",
        type: "contact",
        email: validatedData.email,
        name: `${validatedData.firstName} ${validatedData.lastName}`.trim(),
        company: validatedData.company || undefined,
        message: `[${validatedData.serviceType}] ${validatedData.message}`,
        source: (req.headers["referer"] as string) || undefined,
        receivedAt: new Date().toISOString(),
        ip: req.ip,
      });

      res.json({
        success: true,
        message: "Contact form submitted successfully",
        contactId: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Lead capture: download / purchase / demo / pricing intents from the site.
  // Fire-and-forget from the client; always 200 so a UI action (download,
  // opening the mail client) is never blocked by lead plumbing.
  app.post("/api/lead", async (req, res) => {
    try {
      const data = leadSchema.parse(req.body);
      await captureLead({
        kind: "lead",
        ...data,
        source: data.source || (req.headers["referer"] as string) || undefined,
        receivedAt: new Date().toISOString(),
        ip: req.ip,
      });
      res.json({ success: true });
    } catch (error) {
      // Never surface a hard error to the visitor for a background capture.
      if (!(error instanceof z.ZodError)) {
        console.error("Lead capture error:", error);
      }
      res.status(error instanceof z.ZodError ? 400 : 200).json({ success: false });
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
