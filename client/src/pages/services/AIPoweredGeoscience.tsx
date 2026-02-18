import ServicePageLayout from "./ServicePageLayout";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AIPoweredGeoscience() {
  const features = [
    {
      title: "Automated Petrophysical Log Generation",
      description: "Our machine learning models can predict various petrophysical properties from basic well logs, saving time and costs associated with specialized logging runs."
    },
    {
      title: "AI-Enhanced Seismic Signal Tracking",
      description: "We employ advanced neural networks for the automated tracking of seismic events and horizons, enabling rapid and consistent interpretation across large datasets."
    },
    {
        title: "Predictive Reservoir Modeling",
        description: "Using historical production data and geological parameters, our AI models can forecast reservoir performance and help in optimizing development plans."
    },
    {
        title: "Unsupervised Anomaly Detection",
        description: "We use unsupervised learning techniques to identify subtle geological features and potential hazards in seismic data that might be missed by human interpreters."
    }
  ];

  return (
    <ServicePageLayout title="AI-Powered Geoscience">
        <p className="lead text-xl text-[var(--medium-gray)] mb-8">
            A deep dive into how AMEYEM leverages Artificial Intelligence and Machine Learning to revolutionize geophysical data interpretation. From raw well logs to petrophysical predictions, our AI-driven approach provides superior insights. We specialize in automated signal tracking on seismic images, which significantly reduces interpretation time and improves accuracy.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">Key Capabilities</h2>
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
            <p className="text-lg text-[var(--medium-gray)] mb-4">Ready to integrate AI into your geoscience workflows?</p>
            <Link href="/#contact">
                <Button size="lg" className="bg-[var(--ocean-blue)] text-white hover:bg-opacity-90">
                    Contact Us to Learn More
                </Button>
            </Link>
        </div>
    </ServicePageLayout>
  );
}
