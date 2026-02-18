import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-poppins font-bold text-[var(--ocean-blue)]">
              AMEYEM
              <span className="text-[var(--energy-orange)] text-sm ml-1">Geo Solutions</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-[var(--ocean-blue)] hover:text-[var(--energy-orange)] font-medium transition-colors duration-200">
                Home
              </Link>
              <div className="relative group">
                <button onClick={() => scrollToSection('services')} className="text-[var(--charcoal)] hover:text-[var(--ocean-blue)] font-medium transition-colors duration-200 flex items-center">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6 grid grid-cols-1 gap-4">
<Link href="/services/ai-powered-geoscience" className="block p-3 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 text-left">
  <div className="font-medium text-[var(--ocean-blue)]">AI & Machine Learning</div>
  <div className="text-sm text-[var(--medium-gray)]">Advanced geoscience applications</div>
</Link>
<Link href="/services/custom-software-tools" className="block p-3 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 text-left">
  <div className="font-medium text-[var(--ocean-blue)]">Custom Software Tools</div>
  <div className="text-sm text-[var(--medium-gray)]">Bespoke Python solutions</div>
</Link>
<Link href="/services/web-mobile-development" className="block p-3 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 text-left">
  <div className="font-medium text-[var(--ocean-blue)]">Web & Mobile Development</div>
  <div className="text-sm text-[var(--medium-gray)]">Modern digital solutions</div>
</Link>
<Link href="/services/full-cycle-geophysical-services" className="block p-3 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 text-left">
  <div className="font-medium text-[var(--ocean-blue)]">Geophysical Services</div>
  <div className="text-sm text-[var(--medium-gray)]">Expert interpretation & analysis</div>
</Link>
                  </div>
                </div>
              </div>
              <button onClick={() => scrollToSection('projects')} className="text-[var(--charcoal)] hover:text-[var(--ocean-blue)] font-medium transition-colors duration-200">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--charcoal)] hover:text-[var(--ocean-blue)] font-medium transition-colors duration-200">
                About
              </button>
              <button onClick={() => scrollToSection('training')} className="text-[var(--charcoal)] hover:text-[var(--ocean-blue)] font-medium transition-colors duration-200">
                Training
              </button>
              <div className="relative group">
                <button onClick={() => scrollToSection('products')} className="text-[var(--charcoal)] hover:text-[var(--ocean-blue)] font-medium transition-colors duration-200 flex items-center">
                  Products <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6 grid grid-cols-1 gap-4">
                    <Link href="/products/seistrans" className="block p-3 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 text-left">
                      <div className="font-medium text-[var(--ocean-blue)]">SeisTrans</div>
                      <div className="text-sm text-[var(--medium-gray)]">AI-powered seismic interpretation suite</div>
                    </Link>
                    <button onClick={() => scrollToSection('products')} className="block w-full p-3 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 text-left">
                      <div className="font-medium text-[var(--ocean-blue)]">All Products</div>
                      <div className="text-sm text-[var(--medium-gray)]">View our full product portfolio</div>
                    </button>
                  </div>
                </div>
              </div>
              <Button onClick={() => scrollToSection('contact')} className="bg-[var(--ocean-blue)] text-white hover:bg-opacity-90 transition-all duration-200">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--charcoal)] hover:text-[var(--ocean-blue)]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-[var(--charcoal)] hover:text-[var(--ocean-blue)] w-full text-left">
                Home
              </Link>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-[var(--charcoal)] hover:text-[var(--ocean-blue)] w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-[var(--charcoal)] hover:text-[var(--ocean-blue)] w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-[var(--charcoal)] hover:text-[var(--ocean-blue)] w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('training')} className="block px-3 py-2 text-[var(--charcoal)] hover:text-[var(--ocean-blue)] w-full text-left">
                Training
              </button>
              <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-[var(--charcoal)] hover:text-[var(--ocean-blue)] w-full text-left">
                Products
              </button>
              <Link href="/products/seistrans" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-2 text-sm text-[var(--medium-gray)] hover:text-[var(--ocean-blue)] w-full text-left">
                SeisTrans
              </Link>
              <Button onClick={() => scrollToSection('contact')} className="block mx-3 my-2 bg-[var(--ocean-blue)] text-white">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
