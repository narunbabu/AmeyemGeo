import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Crown,
  Heart,
  GitBranch,
  Building2,
  GraduationCap,
  PenTool,
  Globe,
  ExternalLink,
  Rocket,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface Product {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  url: string;
  status: "Live" | "Alpha" | "In Development";
  statusColor: string;
  gradient: string;
  tech: string[];
  revenue: string;
}

const liveProducts: Product[] = [
  {
    icon: Activity,
    name: "SeisTrans",
    tagline: "AI Seismic Interpretation Suite",
    description:
      "AI-powered desktop application for seismic interpretation and ML-based reservoir characterization. 13 autonomous agents automate the workflow from well tie to prediction volumes — all running locally on your machine.",
    domain: "ameyem.com/products/seistrans",
    url: "/products/seistrans",
    status: "Live",
    statusColor: "bg-green-500",
    gradient: "from-cyan-500 to-blue-600",
    tech: ["Python", "PyQt6", "PyTorch", "NumPy", "Matplotlib"],
    revenue: "Open Core + SaaS Tiers",
  },
  {
    icon: Crown,
    name: "Chess99",
    tagline: "Online Chess Platform",
    description:
      "Real-time multiplayer chess with WebSocket-powered gameplay, premium analytics, Razorpay-integrated tournaments, and a 3-tier subscription model.",
    domain: "chess99.com",
    url: "https://chess99.com",
    status: "Live",
    statusColor: "bg-green-500",
    gradient: "from-blue-500 to-cyan-500",
    tech: ["React", "Laravel", "MySQL", "WebSockets"],
    revenue: "Tournaments + Subscriptions",
  },
  {
    icon: Heart,
    name: "Sambandhalu",
    tagline: "Telugu Matrimonial Platform",
    description:
      "Community-focused matrimonial platform with OTP & Google OAuth authentication, real-time Socket.io messaging, and verified profiles for the Telugu community.",
    domain: "sambandhalu.com",
    url: "https://sambandhalu.com",
    status: "Live",
    statusColor: "bg-green-500",
    gradient: "from-green-500 to-teal-500",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    revenue: "Premium Profiles + Credits",
  },
  {
    icon: GitBranch,
    name: "VamshaGanga",
    tagline: "Family Tree Builder",
    description:
      "Interactive family tree visualization with surname capsules, cross-capsule attachments, and an intuitive flow-based UI for mapping Indian family lineages.",
    domain: "vamshaganga.com",
    url: "https://vamshaganga.com",
    status: "Live",
    statusColor: "bg-green-500",
    gradient: "from-amber-500 to-orange-500",
    tech: ["Next.js", "React Flow", "Prisma", "PostgreSQL"],
    revenue: "Freemium Exports",
  },
  {
    icon: Building2,
    name: "ThogataApp",
    tagline: "Community Portal",
    description:
      "Digital platform for the Thogata Veera Kshatriya community — connecting members, preserving heritage, and enabling community collaboration across India.",
    domain: "thogata.co.in",
    url: "https://thogata.co.in",
    status: "Live",
    statusColor: "bg-green-500",
    gradient: "from-indigo-500 to-purple-500",
    tech: ["React", "Laravel", "MySQL"],
    revenue: "Community Platform",
  },
];

const developmentProducts: Product[] = [
  {
    icon: GraduationCap,
    name: "ChittiBadi",
    tagline: "AI Education for Children",
    description:
      "Adaptive AI-powered quiz platform for Indian children (Classes 1-5) using GPT-4o for intelligent question generation and personalized learning paths.",
    domain: "chittibadi.ameyem.com",
    url: "https://chittibadi.ameyem.com",
    status: "Alpha",
    statusColor: "bg-yellow-500",
    gradient: "from-red-500 to-orange-500",
    tech: ["React", "Express", "PostgreSQL", "OpenAI"],
    revenue: "Freemium + School Partnerships",
  },
  {
    icon: PenTool,
    name: "StoryLikho",
    tagline: "AI Writing Platform",
    description:
      "Multi-LLM creative writing platform integrating Claude, Gemini, GPT, and DeepSeek for crafting novels and stories with a credit-based SaaS model.",
    domain: "storylikho.com",
    url: "https://storylikho.com",
    status: "In Development",
    statusColor: "bg-blue-500",
    gradient: "from-purple-500 to-pink-500",
    tech: ["React", "Express", "PostgreSQL", "Multi-LLM"],
    revenue: "SaaS Tiers (Free / Pro / Studio)",
  },
  {
    icon: Globe,
    name: "GeoAgent",
    tagline: "Geoscience Python Library",
    description:
      "Open-source Python library for seismic data processing, well log analysis, and synthetic seismogram generation — powering AMEYEM's geoscience consulting.",
    domain: "ameyem.com/geo",
    url: "https://ameyem.com/geo",
    status: "Live",
    statusColor: "bg-green-500",
    gradient: "from-emerald-500 to-cyan-600",
    tech: ["Python", "PyTorch", "NumPy", "SciPy"],
    revenue: "Open Source + Consulting",
  },
];

function ProductCard({ product }: { product: Product }) {
  const IconComponent = product.icon;

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div
            className={`w-14 h-14 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className="text-white w-7 h-7" />
          </div>
          <Badge className={`${product.statusColor} text-white text-xs`}>
            {product.status}
          </Badge>
        </div>

        <h3 className="text-2xl font-poppins font-bold text-white mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--energy-orange)] font-medium mb-4">
          {product.tagline}
        </p>

        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-gray-400">{product.revenue}</span>
          {product.url.startsWith("/") ? (
            <Link
              href={product.url}
              className="text-[var(--energy-orange)] hover:text-orange-300 transition-colors duration-200 flex items-center text-sm font-medium"
            >
              {product.domain}
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          ) : (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--energy-orange)] hover:text-orange-300 transition-colors duration-200 flex items-center text-sm font-medium"
            >
              {product.domain}
              <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function VenturesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            Our Digital{" "}
            <span className="text-[var(--energy-orange)]">
              Product Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond geoscience consulting, AMEYEM builds and operates a growing
            portfolio of digital products spanning gaming, education, community,
            and creative technology.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center gap-8 mb-16">
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-[var(--energy-orange)]">
              8
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              Products
            </div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-[var(--energy-orange)]">
              6
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              Live
            </div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <div className="text-2xl font-poppins font-bold text-[var(--energy-orange)]">
              7
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              Domains
            </div>
          </div>
        </div>

        {/* Live Products */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <h3 className="text-xl font-poppins font-semibold text-white">
              Live Products
            </h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        {/* In Development */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <h3 className="text-xl font-poppins font-semibold text-white">
              Growing &amp; Emerging
            </h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            All products are built, maintained, and operated by the AMEYEM
            engineering team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[var(--energy-orange)] text-white hover:bg-opacity-90 transition-all duration-200 px-8 py-4 text-lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-200 px-8 py-4 text-lg"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
