import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Download, MessageCircle, Linkedin, Layers, Video } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll respond within 4 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        serviceType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.serviceType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@ameyem.com",
      secondary: "We typically respond within 4 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91-8800197778",
      secondary: "Monday - Friday, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Vanasthalipuram, Hyderabad",
      secondary: "Rangareddy, Telangana, 500070"
    }
  ];

  const quickActions = [
    {
      icon: Download,
      text: "Download Company Brochure",
      action: () => toast({ title: "Brochure download would be implemented here" })
    },
    {
      icon: MessageCircle,
      text: "WhatsApp Quick Chat",
      action: () => window.open("https://wa.me/918800197778", "_blank")
    },
    {
      icon: Linkedin,
      text: "Connect on LinkedIn",
      action: () => toast({ title: "LinkedIn integration would be implemented here" })
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--light-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
            Ready to <span className="text-[var(--ocean-blue)]">Transform Your Geoscience Operations?</span>
          </h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            Get in touch with our experts to discuss your project requirements and discover how we can accelerate your success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-poppins font-bold text-[var(--charcoal)] mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-[var(--charcoal)]">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-[var(--charcoal)]">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[var(--charcoal)]">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.doe@company.com"
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-[var(--charcoal)]">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company Name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="serviceType" className="text-sm font-medium text-[var(--charcoal)]">Service Interest *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="software">Custom Software Tools</SelectItem>
                      <SelectItem value="interpretation">Geophysical Services</SelectItem>
                      <SelectItem value="training-professional">Professional Training</SelectItem>
                      <SelectItem value="training-kids">Kids Technology Courses</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-[var(--charcoal)]">Project Description *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                    className="mt-2"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-[var(--ocean-blue)] text-white hover:bg-opacity-90 transition-all duration-200 py-4"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Layers className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-[var(--medium-gray)] mb-4">Need a product demonstration?</p>
                  <Button 
                    type="button" 
                    className="bg-[var(--energy-orange)] text-white hover:bg-opacity-90 transition-all duration-200"
                    onClick={() => toast({ title: "Demo scheduling with Razorpay would be implemented here" })}
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Schedule Demo (Paid)
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-[var(--ocean-blue)] text-white">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-poppins font-bold mb-8">Get in Touch Directly</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <p className="text-blue-200">{info.primary}</p>
                          <p className="text-blue-200 text-sm">{info.secondary}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Links */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-xl font-poppins font-bold text-[var(--charcoal)] mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <button 
                        key={index}
                        onClick={action.action}
                        className="flex items-center space-x-3 p-4 rounded-lg hover:bg-[var(--light-gray)] transition-colors duration-200 w-full text-left"
                      >
                        <IconComponent className="text-[var(--ocean-blue)] w-5 h-5" />
                        <span className="font-medium text-[var(--charcoal)]">{action.text}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
