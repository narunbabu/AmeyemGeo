import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function AboutSection() {
  const teamMembers = [
    {
      name: "Arun Babu Nalamara",
      role: "Founder & Director",
      description: "Seismic Interpreter and development geophysicist with extensive ML and Python expertise",
      gradient: "from-[var(--ocean-blue)] to-blue-600"
    },
    {
      name: "CG Rao",
      role: "Senior Advisor",
      description: "Seasoned geophysicist with over 25 years of industry experience",
      gradient: "from-[var(--energy-orange)] to-orange-600"
    },
    {
      name: "SLN Rao",
      role: "Strategic Advisor",
      description: "Rich experience spanning Oil & Gas and Software industries",
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Sirisha, GT",
      role: "Geophysicist",
      description: "M.Sc (Tech) Geophysics, Andhra University. VES interpretation specialist",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[var(--light-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
            Our Company & <span className="text-[var(--ocean-blue)]">Vision</span>
          </h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            Founded in 2017 in Hyderabad, Telangana, AMEYEM has been at the forefront of instilling efficiency in G&G activities through innovative technology and expert insight.
          </p>
        </div>
        
        {/* Company Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-poppins font-semibold text-[var(--charcoal)] mb-6">Our Mission</h3>
            <p className="text-[var(--medium-gray)] mb-6 leading-relaxed">
              AMEYEM Geo Solutions started operations with a mission to instill efficiency in G&G activities by leveraging cutting-edge AI/ML technologies and deep domain expertise. We bridge the gap between traditional geoscience practices and modern computational approaches.
            </p>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-[var(--charcoal)] mb-2">Corporate Information</h4>
                <div className="space-y-1 text-sm text-[var(--medium-gray)]">
                  <p><strong>Company:</strong> AMEYEM GEO SOLUTIONS PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U72900TG2016PTC112396</p>
                  <p><strong>Location:</strong> Vanasthalipuram, Hyderabad, Rangareddy, Telangana, 500070</p>
                  <p><strong>Contact:</strong> info@ameyem.com, +91-8800197778</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office environment with computers and technical equipment" 
              className="w-full h-80 object-cover rounded-2xl shadow-lg" 
            />
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-poppins font-bold text-[var(--charcoal)] text-center mb-12">Our Expert Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <User className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-poppins font-semibold text-[var(--charcoal)] mb-2">{member.name}</h4>
                  <p className="text-[var(--energy-orange)] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-[var(--medium-gray)]">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
