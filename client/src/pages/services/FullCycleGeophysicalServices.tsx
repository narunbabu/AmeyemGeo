import ServicePageLayout from "./ServicePageLayout";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function FullCycleGeophysicalServices() {
    const features = [
        {
            title: "Prospect Identification and Evaluation",
            description: "From basin screening to prospect maturation, we help you identify and de-risk potential hydrocarbon accumulations."
        },
        {
            title: "Advanced Seismic Interpretation",
            description: "This includes structural and stratigraphic interpretation, fault and horizon mapping, and seismic attribute analysis."
        },
        {
            title: "Rock Physics and AVO Analysis",
            description: "We perform detailed rock physics modeling and Amplitude Variation with Offset (AVO) analysis to predict lithology and fluid content."
        },
        {
            title: "Quantitative Interpretation",
            description: "Including seismic inversion for acoustic impedance and other rock properties."
        },
        {
            title: "Groundwater Exploration",
            description: "We provide Vertical Electrical Sounding (VES) data acquisition design, interpretation, and reporting for groundwater resource management."
        }
    ];

  return (
    <ServicePageLayout title="Full-Cycle Geophysical Services">
      <p className="lead text-xl text-[var(--medium-gray)] mb-8">
        We offer a comprehensive suite of geophysical services covering the entire exploration and development lifecycle. Our team of experienced geophysicists provides expert interpretation, modeling, and analysis.
      </p>

        <div className="my-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">Core Service Areas</h2>
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
        <p className="text-lg text-[var(--medium-gray)] mb-4">Looking for a reliable partner for your next geophysical project?</p>
        <Link href="/#contact">
            <Button size="lg" className="bg-green-600 text-white hover:bg-opacity-90">
                Discuss Your Requirements
            </Button>
        </Link>
      </div>
    </ServicePageLayout>
  );
}
