import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, TrendingUp, Layers, FlaskRound, Droplets, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Geoscience",
      description: "From raw well logs to petrophysical predictions, leverage machine learning for superior insights and automated signal tracking on seismic images.",
      features: ["Petrophysical log generation", "Seismic signal tracking", "Automated interpretation"],
      gradient: "from-[var(--ocean-blue)] to-blue-600"
    },
    {
      icon: Code,
      title: "Custom Software Tools",
      description: "Automate workflows with bespoke Python tools for well log splicing, seismic digitization, and data conversion optimized for your specific needs.",
      features: ["Well log splicing automation", "Seismic digitization tools", "Data format conversion"],
      gradient: "from-[var(--energy-orange)] to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Full-Cycle Geophysical Services",
      description: "Expert interpretation, modeling, and analysis from prospect identification to volumetrics, including groundwater exploration services.",
      features: ["Seismic interpretation", "Rock physics analysis", "VES interpretation"],
      gradient: "from-green-500 to-green-600"
    }
  ];

  const capabilities = [
    {
      icon: Layers,
      title: "Seismic Interpretation",
      description: "Qualitative & quantitative interpretation, stratigraphic analysis, and structural modeling"
    },
    {
      icon: FlaskRound,
      title: "Rock Physics & Petrophysics",
      description: "AVO analysis, seismic inversion, and reservoir characterization"
    },
    {
      icon: Droplets,
      title: "Groundwater Exploration",
      description: "Vertical Electrical Sounding (VES) interpretation and comprehensive reporting"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
            Integrated Geophysical Services & <span className="text-[var(--ocean-blue)]">Custom Technology Solutions</span>
          </h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            From AI-powered interpretation to bespoke software tools, we deliver end-to-end solutions that maximize efficiency and unlock reservoir potential.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-poppins font-semibold text-[var(--charcoal)] mb-4">{service.title}</h3>
                  <p className="text-[var(--medium-gray)] mb-6">{service.description}</p>
                  <ul className="space-y-2 text-sm text-[var(--medium-gray)] mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="text-[var(--energy-orange)] mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-[var(--ocean-blue)] font-medium hover:text-[var(--energy-orange)] transition-colors duration-200 flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Detailed Services Breakdown */}
        <div className="bg-[var(--light-gray)] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-poppins font-bold text-[var(--charcoal)] mb-6">Comprehensive Capabilities</h3>
              <div className="space-y-6">
                {capabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  const colors = ["bg-[var(--ocean-blue)]", "bg-[var(--energy-orange)]", "bg-green-500"];
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-6 h-6 ${colors[index]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <IconComponent className="text-white w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--charcoal)] mb-1">{capability.title}</h4>
                        <p className="text-[var(--medium-gray)] text-sm">{capability.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Python code for geological data analysis" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-6">
                <div className="text-white">
                  <div className="font-medium">Python-Powered Analysis</div>
                  <div className="text-sm opacity-90">Custom algorithms for geological data processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
