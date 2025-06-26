import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceLinks = [
    { name: "AI & Machine Learning", section: "services" },
    { name: "Custom Software Tools", section: "services" },
    { name: "Geophysical Services", section: "services" },
    { name: "Professional Training", section: "training" },
    { name: "Kids Technology Courses", section: "training" }
  ];

  const companyLinks = [
    { name: "About Us", section: "about" },
    { name: "Case Studies", section: "projects" },
    { name: "Ameyem Ventures", section: "ventures" },
    { name: "Contact", section: "contact" },
    { name: "Resources & Blog", action: () => alert("Blog/Resources page would be implemented") }
  ];

  const sisterBrands = [
    { name: "StoryLikho - AI Writing", section: "ventures" },
    { name: "Chess99 - Online Chess", section: "ventures" },
    { name: "Sambandhalu - Community", section: "ventures" },
    { name: "Chittibadi - Social Learning", section: "ventures" }
  ];

  const socialLinks = [
    { icon: Linkedin, action: () => alert("LinkedIn profile would be linked") },
    { icon: Twitter, action: () => alert("Twitter profile would be linked") },
    { icon: Mail, action: () => window.location.href = "mailto:info@ameyem.com" }
  ];

  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-poppins font-bold text-white mb-4">
              AMEYEM
              <span className="text-[var(--energy-orange)] text-lg ml-1">Geo Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Accelerating geoscience with intelligent software and expert insight. Leveraging AI/ML and 17+ years of field experience to maximize reservoir value.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p><strong>AMEYEM GEO SOLUTIONS PRIVATE LIMITED</strong></p>
              <p>CIN: U72900TG2016PTC112396</p>
              <p>Vanasthalipuram, Hyderabad, Rangareddy, Telangana, 500070</p>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="hover:text-[var(--energy-orange)] transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action ? link.action : () => scrollToSection(link.section!)}
                    className="hover:text-[var(--energy-orange)] transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Sister Brands Banner */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-6">
            <h5 className="text-lg font-medium text-gray-300 mb-4">Explore Our Innovation Portfolio</h5>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              {sisterBrands.map((brand, index) => (
                <span key={index} className="flex items-center">
                  <button 
                    onClick={() => scrollToSection(brand.section)}
                    className="text-gray-400 hover:text-[var(--energy-orange)] transition-colors duration-200"
                  >
                    {brand.name}
                  </button>
                  {index < sisterBrands.length - 1 && <span className="text-gray-600 ml-6">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AMEYEM Geo Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <button 
                  key={index}
                  onClick={social.action}
                  className="text-gray-400 hover:text-[var(--energy-orange)] transition-colors duration-200"
                >
                  <IconComponent className="w-6 h-6" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
