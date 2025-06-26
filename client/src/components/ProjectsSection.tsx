import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Droplets, Bot, Clock, TrendingUp, Eye, Gauge, MapPin, BarChart, Rocket, Code, Brain } from "lucide-react";

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
      description: "Developed an 'Automatic well log splicing application' in Python with modules for file analysis, depth matching, baseline corrections, and automated splicing. Highly appreciated by Cairn Vedanta user community.",
      metrics: [
        { icon: Clock, text: "1.5 month development" },
        { icon: TrendingUp, text: "Fully automated process" }
      ],
      color: "bg-[var(--ocean-blue)]",
      side: "left",
      year: "2018"
    },
    {
      icon: Droplets,
      title: "VES Interpretation & Reporting",
      client: "Borewell Engineering Rock Drill Industries",
      description: "Providing Vertical Electrical Sounding interpretation and report preparation for groundwater exploration across 3 districts (200+ VES locations) in Uttar Pradesh and Madhya Pradesh with custom Python tools.",
      metrics: [
        { icon: MapPin, text: "200+ VES locations" },
        { icon: BarChart, text: "3 districts covered" }
      ],
      color: "bg-[var(--energy-orange)]",
      side: "right",
      year: "2018-Ongoing"
    },
    {
      icon: Bot,
      title: "Automatic Seismic Digitization",
      client: "EyeCube Solutions",
      description: "Built a machine learning tool for automatic digitization of hard copy seismic shot gather scans, using advanced image processing and ML signal tracking algorithms.",
      metrics: [
        { icon: Eye, text: "ML signal tracking" },
        { icon: Gauge, text: "24-array processing" }
      ],
      color: "bg-green-500",
      side: "left",
      year: "2017"
    },
    {
      icon: TrendingUp,
      title: "Quick Seismic Interpretation",
      client: "Bhugarbho Geo Sciences",
      description: "Provided rapid seismic interpretation services for small field evaluation, successfully analyzing close to 5 blocks within tight timelines.",
      metrics: [
        { icon: Clock, text: "3-day turnaround" },
        { icon: BarChart, text: "5 blocks evaluated" }
      ],
      color: "bg-purple-500",
      side: "right",
      year: "2018"
    },
    {
      icon: Code,
      title: "ASCII to SEGY Conversion",
      client: "R2V Technologies",
      description: "Provided comprehensive data conversion services, converting 200 digitized ASCII files to industry-standard SEGY/SEGD format for seismic data processing.",
      metrics: [
        { icon: BarChart, text: "200 files converted" },
        { icon: TrendingUp, text: "Industry standard format" }
      ],
      color: "bg-indigo-500",
      side: "left",
      year: "2016-2017"
    },
    {
      icon: Brain,
      title: "ML Petrophysical Log Generation",
      client: "Individual Client",
      description: "Developed machine learning models to generate petrophysical logs from raw well logs, demonstrating AI capabilities in log interpretation and analysis.",
      metrics: [
        { icon: Brain, text: "ML algorithms" },
        { icon: Eye, text: "POC completion" }
      ],
      color: "bg-teal-500",
      side: "right",
      year: "2018"
    },
    {
      icon: TrendingUp,
      title: "Geophysical Interpretation Services",
      client: "Selan Oil Exploration",
      description: "Provided comprehensive seismic interpretation and geophysical analysis services for oil exploration projects, leveraging advanced interpretation techniques.",
      metrics: [
        { icon: Eye, text: "Seismic interpretation" },
        { icon: BarChart, text: "Exploration analysis" }
      ],
      color: "bg-orange-500",
      side: "left",
      year: "Ongoing"
    },
    {
      icon: Gauge,
      title: "Geophysical Services",
      client: "Antelopus Energy",
      description: "Delivered specialized geophysical interpretation and analysis services supporting energy exploration and development activities.",
      metrics: [
        { icon: TrendingUp, text: "Energy sector" },
        { icon: Eye, text: "Specialized analysis" }
      ],
      color: "bg-red-500",
      side: "right",
      year: "Ongoing"
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
