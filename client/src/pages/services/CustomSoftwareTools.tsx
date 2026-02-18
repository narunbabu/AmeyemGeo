import ServicePageLayout from "./ServicePageLayout";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CustomSoftwareTools() {
    const features = [
        {
            title: "Automatic Well Log Splicing Application",
            description: "A tool that automates the tedious process of splicing well logs from different runs, ensuring a continuous and accurate log for interpretation."
        },
        {
            title: "Seismic Digitization from Hard Copies",
            description: "We have developed machine learning-powered tools to digitize legacy seismic sections from scanned images, bringing your old data back to life."
        },
        {
            title: "Custom Data Conversion Utilities",
            description: "We build robust tools to convert between various industry-standard and proprietary data formats (e.g., ASCII, SEGY, SEGD, DLIS)."
        },
        {
            title: "Workflow Automation Scripts",
            description: "We can create scripts to automate repetitive tasks in your seismic processing and interpretation workflows, freeing up your geoscientists to focus on what matters most."
        }
    ];

  return (
    <ServicePageLayout title="Custom Software Tools">
      <p className="lead text-xl text-[var(--medium-gray)] mb-8">
        At AMEYEM, we understand that off-the-shelf software doesn't always meet the unique challenges of your projects. We specialize in developing bespoke Python-based tools to automate your workflows and enhance your team's productivity.
      </p>

        <div className="my-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">Our Custom Solutions</h2>
            <ul className="space-y-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-[var(--medium-gray)]">{feature.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-[var(--medium-gray)] mb-4">Have a specific challenge that needs a custom solution?</p>
        <Link href="/#contact">
            <Button size="lg" className="bg-[var(--energy-orange)] text-white hover:bg-opacity-90">
                Let's Build It Together
            </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
}
