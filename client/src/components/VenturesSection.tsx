import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Sword, Users, MessageCircle, FileText, Rocket } from "lucide-react";

export default function VenturesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ventures = [
    {
      icon: PenTool,
      name: "StoryLikho",
      description: "A freemium AI-powered platform to unleash creativity through story writing with advanced semantic models.",
      domain: "storylikho.com",
      status: "Active",
      statusColor: "bg-green-500",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sword,
      name: "Chess99",
      description: "A freemium browser-based chess platform with premium analytics for enthusiasts to play, learn, and compete.",
      domain: "chess99.com",
      status: "Coming Q3 2026",
      statusColor: "bg-yellow-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      name: "Sambandhalu",
      description: "A matrimonial and family networking platform designed to foster meaningful connections in communities.",
      domain: "sambandhalu.com",
      status: "Alpha Q2 2026",
      statusColor: "bg-blue-500",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: MessageCircle,
      name: "Chittibadi",
      description: "Telugu-first social learning and community platform with premium creator tools and engagement features.",
      domain: "chittibadi.com",
      status: "Active Beta",
      statusColor: "bg-green-500",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: FileText,
      name: "ScriboSync",
      description: "Advanced SaaS platform for document versioning and collaborative editing with enterprise-grade features.",
      domain: "scribosync.com",
      status: "Reserved",
      statusColor: "bg-gray-500",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="ventures" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            Innovation Beyond Geoscience: <span className="text-[var(--energy-orange)]">Our Founder's Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AMEYEM's spirit of innovation, led by our founder Arun Babu Nalamara, extends to a diverse portfolio of digital ventures solving unique problems in education, creative arts, and community building.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => {
            const IconComponent = venture.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${venture.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-4">{venture.name}</h3>
                  <p className="text-gray-300 mb-6">{venture.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--energy-orange)] font-medium">{venture.domain}</span>
                    <Badge className={`${venture.statusColor} text-white text-sm`}>
                      {venture.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">All platforms share a unified login and billing system for seamless user experience</p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[var(--energy-orange)] text-white hover:bg-opacity-90 transition-all duration-200 px-8 py-4 text-lg"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Learn More About Our Ventures
          </Button>
        </div>
      </div>
    </section>
  );
}
