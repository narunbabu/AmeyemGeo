import ServicePageLayout from "./ServicePageLayout";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

export default function WebMobileDevelopment() {
    const capabilities = [
        {
            title: "Enterprise Web Applications",
            description: "We build custom dashboards, data visualization tools, and internal management systems to streamline your business operations."
        },
        {
            title: "Mobile-First Solutions",
            description: "Using modern frameworks, we develop responsive and performant applications that provide a seamless user experience on any device."
        },
        {
            title: "AI-Powered Platforms",
            description: "Our team specializes in integrating complex artificial intelligence and machine learning models into scalable, user-friendly applications."
        },
        {
            title: "Full-Stack Development",
            description: "From database design (PostgreSQL, Drizzle) to backend logic (Node.js, Express) and frontend interfaces (React, Vite), we cover the entire development lifecycle."
        }
    ];

    const ventures = [
        { name: "StoryLikho", description: "An AI-powered platform to unleash creativity through novel writing and storytelling." },
        { name: "MindKeeper", description: "An intelligent AI notes-keeper and task master that acts as a personal assistant for organization and alerts." },
        { name: "Sambandhalu", description: "A modern matrimony and community networking website to foster meaningful connections." }
    ];

  return (
    <ServicePageLayout title="Custom Web & Mobile Development">
      <p className="lead text-xl text-[var(--medium-gray)] mb-8">
        Beyond our core expertise in geoscience technology, the AMEYEM software development team offers comprehensive web and mobile application development services. We leverage modern technologies to build scalable, robust, and user-friendly digital solutions for a wide range of business needs.
      </p>

        <div className="my-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">What We Build</h2>
            <ul className="space-y-6">
                {capabilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-[var(--medium-gray)]">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="my-12 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">Showcase: Our In-House Ventures</h2>
            <p className="text-[var(--medium-gray)] mb-6">
                To demonstrate our end-to-end development capabilities, we are actively building our own portfolio of innovative web applications. These pipeline projects are a testament to our skills in concept, design, AI integration, and deployment.
            </p>
            <div className="space-y-4">
                {ventures.map((venture, index) => (
                     <p key={index} className="text-[var(--medium-gray)]"><strong>{venture.name}:</strong> {venture.description}</p>
                ))}
            </div>
             <Link href="/#ventures">
                <Button variant="link" className="mt-4 px-0">
                    Learn more about our ventures <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-[var(--medium-gray)] mb-4">Have an idea for a web or mobile application?</p>
        <Link href="/#contact">
            <Button size="lg" className="bg-purple-600 text-white hover:bg-opacity-90">
                Partner With Us
            </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
}
