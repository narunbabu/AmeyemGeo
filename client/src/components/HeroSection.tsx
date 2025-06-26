import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import { Rocket, GraduationCap } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[var(--ocean-blue)] to-blue-900 text-white overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full animate-wave" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 C150,350 350,450 600,400 C850,350 1050,450 1200,400 L1200,600 L0,600 Z" fill="currentColor"/>
          <path d="M0,450 C200,400 400,500 700,450 C900,400 1100,500 1200,450 L1200,600 L0,600 Z" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                Accelerating <span className="text-[var(--energy-orange)]">Geoscience</span> with Intelligent Software & Expert Insight
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Leveraging AI/ML and 17+ years of field experience to maximize reservoir value and operational efficiency for the Oil & Gas industry.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('services')} 
                className="bg-[var(--energy-orange)] text-white hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 px-8 py-4 text-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explore O&G Solutions
              </Button>
              <Button 
                onClick={() => scrollToSection('training')} 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--ocean-blue)] transition-all duration-200 px-8 py-4 text-lg"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Tech Courses for Kids
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-[var(--energy-orange)]">
                  <Counter target={17} />+
                </div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-[var(--energy-orange)]">
                  <Counter target={200} />+
                </div>
                <div className="text-sm text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-[var(--energy-orange)]">
                  <Counter target={5} />
                </div>
                <div className="text-sm text-blue-100">Major Clients</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                  alt="Seismic data visualization and interpretation" 
                  className="w-full h-80 object-cover rounded-lg" 
                />
              </div>
              <div className="mt-4 text-[var(--charcoal)]">
                <div className="font-medium">AI-Enhanced Seismic Interpretation</div>
                <div className="text-sm text-[var(--medium-gray)]">Real-time signal tracking and automated analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
