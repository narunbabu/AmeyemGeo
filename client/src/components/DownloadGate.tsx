import { useState, type ReactNode, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Download } from "lucide-react";
import { downloads, leadEndpoint } from "@/config/downloads";

/**
 * DownloadGate — wraps a download button in a soft email-gate.
 *
 * Collects contact + profile (never any seismic/well data) and posts it to the
 * self-hosted lead endpoint, then starts the installer download. If no
 * leadEndpoint is configured, it degrades to a plain direct download. The gate
 * is intentionally soft: a "just download" escape never blocks the user.
 */
export function DownloadGate({
  children,
  source = "download",
}: {
  children: ReactNode;
  source?: string;
}) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [useCase, setUseCase] = useState("");
  const [consent, setConsent] = useState(false);

  const startDownload = () => {
    window.location.href = downloads.free;
  };

  // No endpoint configured -> plain direct download, no gate.
  if (!leadEndpoint) {
    return (
      <a href={downloads.free} className="contents">
        {children}
      </a>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubmitting(true);
    try {
      await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, role, useCase, consent, source }),
      });
    } catch {
      /* soft gate: a capture failure must never block the download */
    }
    setSubmitting(false);
    setOpen(false);
    startDownload();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download SeisMind Free</DialogTitle>
          <DialogDescription>
            Tell us a little about you so we can share updates and improve SeisMind.
            We only collect your contact details — never your seismic or well data.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="dg-email">Email *</Label>
            <Input
              id="dg-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="dg-name">Name</Label>
            <Input id="dg-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label>You are a…</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="academic">Academic / researcher</SelectItem>
                <SelectItem value="independent">Independent professional</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="dg-use">What do you hope to do with SeisMind?</Label>
            <Textarea
              id="dg-use"
              rows={2}
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
            />
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              id="dg-consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
            />
            <Label htmlFor="dg-consent" className="text-sm font-normal leading-snug">
              I agree to receive product updates from Ameyem. You can unsubscribe anytime.
            </Label>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <Button type="submit" disabled={!email || !consent || submitting}>
              <Download className="mr-2 h-4 w-4" />
              {submitting ? "Preparing…" : "Download Free Edition"}
            </Button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                startDownload();
              }}
              className="text-xs text-muted-foreground hover:underline"
            >
              No thanks, just download
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
