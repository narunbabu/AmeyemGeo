import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Presentation, GraduationCap, CheckCircle, Calendar, Baby } from "lucide-react";

export default function TrainingSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const professionalFeatures = [
    {
      title: "Seismic Interpretation",
      description: "Qualitative & Quantitative interpretation techniques"
    },
    {
      title: "Machine Learning for O&G",
      description: "AI applications in Oil & Gas and Mining industries"
    },
    {
      title: "Custom Workshops",
      description: "Tailored training programs for your team's specific needs"
    }
  ];

  const kidsFeatures = [
    "12-week structured cohorts (max 5 students)",
    "IIT-educated instructor with industry experience",
    "Hands-on projects and real-world applications",
    "₹12,000 per cohort - Premium quality education"
  ];

  return (
    <section id="training" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
            Training & <span className="text-[var(--ocean-blue)]">Education</span>
          </h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            Upskill your team with expert-led training programs and introduce the next generation to cutting-edge technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Training */}
          <Card className="bg-gradient-to-br from-[var(--ocean-blue)] to-blue-700 text-white overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Presentation className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold">Professional Training</h3>
                  <p className="text-blue-200">Upskill Your Team with Expert-Led G&G Training</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                {professionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[var(--energy-orange)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-blue-200 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-[var(--energy-orange)] text-white hover:bg-opacity-90 transition-all duration-200"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Training
              </Button>
            </CardContent>
          </Card>
          
          {/* Technology for Kids */}
          <Card className="bg-gradient-to-br from-[var(--energy-orange)] to-orange-600 text-white overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold">Technology for Kids</h3>
                  <p className="text-orange-200">Inspiring the Next Generation of Tech Leaders</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/10 border-none">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold mb-1">Ages 8-12</div>
                      <div className="text-orange-200 text-sm">Beginner Coding</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 border-none">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold mb-1">Ages 13-16</div>
                      <div className="text-orange-200 text-sm">Advanced Programming</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-3">
                  {kidsFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-white w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-[var(--energy-orange)] hover:bg-opacity-90 transition-all duration-200"
              >
                <Baby className="mr-2 h-4 w-4" />
                Enroll Your Child
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
