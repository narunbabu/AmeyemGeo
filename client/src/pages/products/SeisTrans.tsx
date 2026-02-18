import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Activity,
  Bot,
  Brain,
  BarChart3,
  FileText,
  Monitor,
  FlaskConical,
  Shield,
  ArrowRight,
  Check,
  Download,
  Calendar,
} from "lucide-react";
import { Link } from "wouter";

const stats = [
  { label: "Wells Processed", value: "500+" },
  { label: "Seismic Traces Predicted", value: "2M+" },
  { label: "ML Models Trained", value: "200+" },
  { label: "Prediction Volumes Generated", value: "50+" },
];

const features = [
  {
    icon: Bot,
    title: "Autonomous Agent Workflow",
    subtitle: "13 AI Agents. One Unified Pipeline.",
    description:
      "SeisTrans coordinates 13 domain-specific agents — ProjectManager, WellData, Seismic, SyntheticTie, Horizon, LogProcessing, SeismicAttribute, MLTraining, VolumeGeneration, Visualization, QC, Presentation, and Report — to execute complete reservoir characterization workflows with minimal manual intervention.",
    detail:
      "What used to take a team of three geoscientists several weeks now completes in hours.",
  },
  {
    icon: Brain,
    title: "Transformer-Based Log Prediction",
    subtitle: "Predict Well Logs from Seismic — Across Your Entire 3D Volume.",
    description:
      "Train PyTorch transformer and mamba architectures on your well-to-seismic relationship. SeisTrans learns the mapping between seismic attributes at well locations and measured log curves (GR, LLD, NPHI, RHOB, DT), then predicts those properties at every trace in your 3D survey.",
    detail:
      "The result: a spatially continuous reservoir model that honors your well data.",
  },
  {
    icon: Activity,
    title: "Professional Synthetic Tie & Bulk Shift",
    subtitle:
      "Automated Well-to-Seismic Correlation for Every Well in Your Project.",
    description:
      "Computes acoustic impedance, reflectivity, and synthetic seismograms for each well, then cross-correlates with extracted seismic traces to find the optimal bulk time shift. Handles wavelet selection, sampling rate conversion, and TDR correction storage automatically.",
    detail:
      "Batch processing across 30+ wells in minutes with 8-panel diagnostic tie plots per well.",
  },
  {
    icon: FileText,
    title: "Industry-Standard Format Support",
    subtitle: "Your Data. Your Formats. No Conversion Required.",
    description:
      "SEG-Y 3D seismic volumes, LAS well log curves, ZMAP horizon grids, Petrel ASCII well heads/deviations/tops/checkshots, and Excel/CSV tables. Import directly from Petrel, OpenWorks, or Kingdom project exports.",
    detail: "No intermediate format, no data loss.",
  },
  {
    icon: Monitor,
    title: "Interactive Visualization Suite",
    subtitle: "See Everything — From Regional Map to Single Trace.",
    description:
      "3D map view with deviated well paths, seismic trace display with horizon overlay, 5-track well log correlation sections with stratigraphic datum flattening, synthetic tie panels, and ML training dashboards with real-time metrics.",
    detail:
      "Built on PyQt6 and Matplotlib — publication-quality figures that export directly to PowerPoint and Word.",
  },
  {
    icon: FlaskConical,
    title: "Petrophysical Volume Computation",
    subtitle: "From Predicted Logs to Reservoir Properties — Automatically.",
    description:
      "Derives VSH (shale volume), PHID (density porosity), PHIT (total porosity), PHIE (effective porosity), and SW (water saturation) at every trace. Each property exported as a full 3D SEG-Y volume.",
    detail:
      "Ready for import into Petrel, OpendTect, or any standard interpretation platform.",
  },
  {
    icon: Shield,
    title: "Data Sovereignty by Design",
    subtitle: "Your Seismic Data Never Leaves Your Machine.",
    description:
      "All raw data is processed locally. SEG-Y files, LAS logs, well databases, and trained models stay on your workstation. The cloud API handles only agent orchestration commands — no raw traces, no proprietary measurements, no bulk data uploads.",
    detail:
      "Compliant by design with data-handling policies at major E&P operators and national oil companies.",
  },
];

const steps = [
  {
    number: 1,
    title: "Import Your Project",
    description:
      "Load well heads, deviation surveys, checkshots, well logs, seismic volumes, and horizon grids from standard industry formats. SeisTrans auto-detects Petrel exports and configures the project structure.",
  },
  {
    number: 2,
    title: "Verify & Tie Wells",
    description:
      "The SyntheticTie agent computes acoustic impedance, generates synthetic seismograms, and finds the optimal bulk time shift for each well. QC reports flag wells with poor correlation for manual review.",
  },
  {
    number: 3,
    title: "Train ML Models",
    description:
      "Select training wells, configure the transformer architecture, and launch training. SeisTrans extracts seismic attributes at well locations, builds windowed training sequences, and trains PyTorch models with real-time validation metrics.",
  },
  {
    number: 4,
    title: "Predict & Derive",
    description:
      "Apply trained models to predict log curves at every trace in your 3D survey — 466,000+ traces in a typical survey. Petrophysical volumes (porosity, saturation, shale volume) are derived automatically.",
  },
  {
    number: 5,
    title: "Deliver",
    description:
      "Generate well log correlation sections, map views, cross-plots, and facies distributions. Export to PowerPoint presentations and Word reports with publication-quality figures. Share SEG-Y prediction volumes with your team.",
  },
];

const pricingTiers = [
  {
    name: "Trial",
    price: "Free",
    period: "30 days",
    description: "Explore the full platform for 30 days.",
    highlighted: false,
    features: [
      "Full desktop application with all visualization tools",
      "Up to 5 wells and 1 seismic volume",
      "Manual ML training (single model, limited epochs)",
      "All import/export formats supported",
      "Community forum access",
      "No credit card required",
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    price: "$1,500",
    period: "/year",
    description: "For working geoscientists and small interpretation teams.",
    highlighted: true,
    features: [
      "Unlimited wells and seismic volumes",
      "Autonomous agent execution — all 13 agents with batch processing",
      "Bulk synthetic tie and shift across entire project",
      "Multiple ML architectures (Transformer, Mamba, GAN+CNN)",
      "Full petrophysical volume computation pipeline",
      "PowerPoint and Word report generation",
      "500 cloud API credits/month",
      "Email support (48-hour response)",
      "Software updates for 12 months",
    ],
    cta: "Subscribe Now",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "$5,000",
    period: "/year",
    description: "For E&P companies and geoscience service firms.",
    highlighted: false,
    features: [
      "Unlimited cloud API credits",
      "On-premise deployment option",
      "Custom model training on proprietary datasets",
      "Priority support — dedicated technical contact (4h SLA)",
      "SSO/LDAP integration for corporate authentication",
      "Audit logging and usage reporting",
      "Custom agent development for company-specific workflows",
      "Annual on-site training workshop (1 day, up to 10 attendees)",
      "Early access to new features and architectures",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

const faqItems = [
  {
    question: "What are the system requirements?",
    answer:
      "SeisTrans runs on Windows 10/11 (64-bit) with Python 3.10+. Recommended: 16 GB RAM, SSD storage, NVIDIA GPU with CUDA support for ML training (8 GB+ VRAM). The application works without a GPU — training will use CPU, which is slower but functional. Typical project (50 wells, one 3D survey) uses 2-4 GB of disk space.",
  },
  {
    question: "Does my seismic data get uploaded to the cloud?",
    answer:
      'No. SeisTrans processes all raw data (SEG-Y, LAS, well databases) locally on your machine. The cloud API only receives lightweight orchestration commands. Raw seismic traces, well log measurements, and trained model weights never leave your workstation. This is an architectural decision, not a configuration option.',
  },
  {
    question: "What seismic data formats are supported?",
    answer:
      "SEG-Y (2D and 3D volumes) via the segyio library. SeisTrans reads standard SEG-Y with IBM or IEEE floating-point encoding, supports byte-position customization for non-standard headers, and handles coordinate scalars automatically. Both regular and irregular grids are supported.",
  },
  {
    question: "Can I import data from Petrel, OpendTect, or Kingdom?",
    answer:
      "Yes. SeisTrans reads Petrel ASCII exports directly (.asc well heads, .dev deviation surveys, .tops formation markers, checkshot files). SEG-Y volumes export identically from all major platforms. LAS well logs are industry-standard. ZMAP horizon grids are supported. Output prediction volumes (SEG-Y) import back into any interpretation platform.",
  },
  {
    question: "What does the free trial include?",
    answer:
      "Full access to the desktop application and all visualization tools for 30 days. The trial limits you to 5 wells and 1 seismic volume, with manual ML training (no autonomous agent execution). This is enough to load a small project, run a few synthetic ties, train a single model, and evaluate the visualization quality. No credit card required.",
  },
  {
    question: "How does the ML prediction work? What architectures are available?",
    answer:
      "SeisTrans trains sequence-to-sequence deep learning models that learn the relationship between seismic attributes and measured well log curves. Available architectures include Enhanced Transformer, Mamba (state-space model), GAN+CNN hybrid, and reinforcement learning approaches. All training runs locally using PyTorch.",
  },
  {
    question: "How accurate are the ML predictions?",
    answer:
      "Accuracy depends on data quality, well density, and geological complexity. In our reference project (Bakrol 3D, 39 wells, 16 seismic attributes), models achieve R-squared values of 0.65-0.90 on blind wells for GR and RHOB. SeisTrans provides per-curve validation metrics, blind-well cross-plots, and residual maps. We recommend a minimum of 15-20 wells with good spatial distribution.",
  },
  {
    question: "Can I use SeisTrans for time-lapse (4D) monitoring?",
    answer:
      "The current version is optimized for 3D interpretation and static reservoir characterization. Time-lapse workflows (difference volumes, time-shift analysis) are on the development roadmap. The underlying architecture supports multiple seismic surveys per project.",
  },
  {
    question: "What happens when my subscription expires?",
    answer:
      "The desktop application continues to work for all local operations — you can still view your projects, visualize data, and use basic features. Agent automation and cloud API access require an active subscription. Your data, models, and project files are always yours — nothing is locked behind the subscription wall.",
  },
  {
    question: "Is there an academic or student discount?",
    answer:
      "Yes. Verified university researchers and students receive a free Professional license for non-commercial academic use. Contact us at academic@ameyem.com with your institutional email and a brief description of your research.",
  },
  {
    question: "How do I get help if something isn't working?",
    answer:
      "Trial and Professional users have access to the community forum and email support. Enterprise users get a dedicated technical contact with a 4-hour response SLA. Our support team includes practicing geoscientists who understand your data and workflows.",
  },
  {
    question: "What about multi-user or team licensing?",
    answer:
      "Professional tier offers volume discounts: 5+ seats at $1,200/year each. Enterprise tier includes unlimited seats with SSO/LDAP integration. Contact sales@ameyem.com for custom team pricing for groups of 20+.",
  },
];

export default function SeisTrans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-6 text-sm px-4 py-1">
              AI-Powered Seismic Interpretation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
              From Seismic to Reservoir —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                in Hours, Not Months.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              SeisTrans is an AI-powered desktop application that automates the
              seismic interpretation workflow — from well tie to reservoir
              characterization — using transformer-based machine learning trained
              on your own data. Your seismic. Your wells. Your models. Running on
              your machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Request a Live Demo
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="flex gap-3">
                <Bot className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">13 specialized AI agents</strong>{" "}
                  orchestrate the full G&G workflow end to end.
                </p>
              </div>
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Your data never leaves</strong>{" "}
                  your machine. All processing stays local.
                </p>
              </div>
              <div className="flex gap-3">
                <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Built by geoscientists</strong>{" "}
                  — SEG-Y, LAS, ZMAP, Petrel ASCII. No conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-poppins font-bold text-[var(--ocean-blue)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--medium-gray)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[var(--light-gray)] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
              Everything Between Well Tie and Board Presentation —{" "}
              <span className="text-[var(--ocean-blue)]">Automated.</span>
            </h2>
          </div>
          <div className="space-y-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <Card
                  key={feature.title}
                  className="overflow-hidden border-0 shadow-lg"
                >
                  <CardContent className="p-0">
                    <div
                      className={`grid md:grid-cols-5 gap-0 ${
                        isEven ? "" : "md:[direction:rtl]"
                      }`}
                    >
                      <div
                        className={`md:col-span-2 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 md:p-12 flex flex-col justify-center items-center text-center text-white ${
                          isEven ? "" : "md:[direction:ltr]"
                        }`}
                      >
                        <IconComponent className="w-12 h-12 mb-4 opacity-90" />
                        <h3 className="text-xl font-poppins font-bold">
                          {feature.title}
                        </h3>
                      </div>
                      <div
                        className={`md:col-span-3 p-8 md:p-12 flex flex-col justify-center ${
                          isEven ? "" : "md:[direction:ltr]"
                        }`}
                      >
                        <p className="text-lg font-semibold text-[var(--ocean-blue)] mb-3">
                          {feature.subtitle}
                        </p>
                        <p className="text-[var(--medium-gray)] leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        <p className="text-sm font-medium text-[var(--charcoal)]">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
              From Raw Data to Board-Ready Deliverables{" "}
              <span className="text-[var(--ocean-blue)]">in Five Steps</span>
            </h2>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-poppins font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-poppins font-semibold text-[var(--charcoal)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--medium-gray)] leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="ml-[-30px] mt-4 h-8 border-l-2 border-dashed border-cyan-200" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
              Choose the Plan That{" "}
              <span className="text-[var(--energy-orange)]">
                Fits Your Team
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden ${
                  tier.highlighted
                    ? "bg-white text-[var(--charcoal)] border-2 border-cyan-400 shadow-2xl scale-105"
                    : "bg-white/10 backdrop-blur-sm border-white/20 text-white"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
                )}
                <CardContent className="p-8 flex flex-col h-full">
                  {tier.highlighted && (
                    <Badge className="bg-cyan-500 text-white w-fit mb-4">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-2xl font-poppins font-bold mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-poppins font-bold">
                      {tier.price}
                    </span>
                    {tier.period !== "30 days" && (
                      <span
                        className={`text-sm ${
                          tier.highlighted
                            ? "text-[var(--medium-gray)]"
                            : "text-gray-400"
                        }`}
                      >
                        {tier.period}
                      </span>
                    )}
                    {tier.period === "30 days" && (
                      <span
                        className={`text-sm ml-2 ${
                          tier.highlighted
                            ? "text-[var(--medium-gray)]"
                            : "text-gray-400"
                        }`}
                      >
                        for {tier.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-6 ${
                      tier.highlighted
                        ? "text-[var(--medium-gray)]"
                        : "text-gray-400"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            tier.highlighted ? "text-cyan-500" : "text-cyan-400"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            tier.highlighted
                              ? "text-[var(--charcoal)]"
                              : "text-gray-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    }`}
                    variant={tier.ctaVariant}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Volume discount: 5+ Professional seats at $1,200/year each. Enterprise
            custom pricing for teams of 20+.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
              Frequently Asked{" "}
              <span className="text-[var(--ocean-blue)]">Questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="text-left text-[var(--charcoal)] font-medium py-5 hover:no-underline hover:text-[var(--ocean-blue)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--medium-gray)] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Stop interpreting trace by trace.
          </h2>
          <p className="text-lg text-cyan-100 mb-4">
            Let the agents do the heavy lifting.
          </p>
          <p className="text-cyan-200 mb-10 max-w-2xl mx-auto">
            SeisTrans automates the repetitive workflows so you can focus on the
            geology. Download the trial, load your project, and run your first ML
            prediction today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download SeisTrans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Talk to Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-cyan-200">
            <span>sales@ameyem.com</span>
            <span>support@ameyem.com</span>
            <span>academic@ameyem.com</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
