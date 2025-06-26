import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Droplets, Bot, Clock, TrendingUp, Eye, Gauge, MapPin, BarChart, Rocket } from "lucide-react";

export default function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      icon: Wrench,
      title: "Well Log Splicing Tool",
      client: "Cairn India",
      description: "Developed a Python-based tool to automatically splice well logs from folder inputs, reducing manual processing time by 85%.",
      metrics: [
        { icon: Clock, text: "3 months saved annually" },
        { icon: TrendingUp, text: "85% efficiency gain" }
      ],
      color: "bg-[var(--ocean-blue)]",
      side: "left"
    },
    {
      icon: Droplets,
      title: "VES Interpretation",
      client: "Borewell Engineering Rock Drill Industries",
      description: "Ongoing interpretation and reporting for groundwater exploration across 200+ locations in UP and MP states.",
      metrics: [
        { icon: MapPin, text: "200+ locations" },
        { icon: BarChart, text: "95% accuracy rate" }
      ],
      color: "bg-[var(--energy-orange)]",
      side: "right"
    },
    {
      icon: Bot,
      title: "Automatic Seismic Digitization",
      client: "EyeCube Solutions",
      description: "Built an ML tool to automatically digitize signals from hard copy scans of seismic shot gathers using advanced computer vision.",
      metrics: [
        { icon: Eye, text: "Computer vision" },
        { icon: Gauge, text: "90% faster processing" }
      ],
      color: "bg-green-500",
      side: "left"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
            A Proven Track Record of <span className="text-[var(--ocean-blue)]">Delivering Efficiency and Results</span>
          </h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            Explore our portfolio of successful projects demonstrating measurable impact across the geoscience industry.
          </p>
        </div>
        
        {/* Project Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[var(--ocean-blue)] to-[var(--energy-orange)] hidden lg:block"></div>
          
          {/* Project Items */}
          <div className="space-y-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="relative flex items-center">
                  {project.side === 'left' ? (
                    <>
                      <div className="flex-1 lg:pr-8">
                        <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-8">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                                <IconComponent className="text-white w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-poppins font-semibold text-[var(--charcoal)]">{project.title}</h3>
                                <p className="text-[var(--energy-orange)] font-medium">{project.client}</p>
                              </div>
                            </div>
                            <p className="text-[var(--medium-gray)] mb-4">{project.description}</p>
                            <div className="flex items-center space-x-6 text-sm">
                              {project.metrics.map((metric, metricIndex) => {
                                const MetricIcon = metric.icon;
                                return (
                                  <div key={metricIndex} className="flex items-center space-x-2">
                                    <MetricIcon className="text-[var(--energy-orange)] w-4 h-4" />
                                    <span className="text-[var(--medium-gray)]">{metric.text}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      {/* Timeline marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[var(--ocean-blue)] rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                      <div className="flex-1 lg:pl-8 hidden lg:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 lg:pr-8 hidden lg:block"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[var(--energy-orange)] rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                      <div className="flex-1 lg:pl-8">
                        <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                          <CardContent className="p-8">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                                <IconComponent className="text-white w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-poppins font-semibold text-[var(--charcoal)]">{project.title}</h3>
                                <p className="text-[var(--energy-orange)] font-medium">{project.client}</p>
                              </div>
                            </div>
                            <p className="text-[var(--medium-gray)] mb-4">{project.description}</p>
                            <div className="flex items-center space-x-6 text-sm">
                              {project.metrics.map((metric, metricIndex) => {
                                const MetricIcon = metric.icon;
                                return (
                                  <div key={metricIndex} className="flex items-center space-x-2">
                                    <MetricIcon className="text-[var(--energy-orange)] w-4 h-4" />
                                    <span className="text-[var(--medium-gray)]">{metric.text}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[var(--ocean-blue)] text-white hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 px-8 py-4 text-lg"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
