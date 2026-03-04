import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Target,
  Layers,
  Code,
  Bug,
  Rocket,
  Palette,
  PenTool,
  Video,
  BarChart3,
  LineChart,
  Bot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Agent {
  icon: LucideIcon;
  name: string;
  role: string;
  model: string;
  focus: string;
}

const devAgents: Agent[] = [
  {
    icon: Layers,
    name: "Agent-Architect",
    role: "System Design & Planning",
    model: "Claude Sonnet",
    focus: "Architecture decisions, API design, code review",
  },
  {
    icon: Code,
    name: "Agent-Developer",
    role: "Feature Implementation",
    model: "Claude Sonnet",
    focus: "Feature building, component dev, API integration",
  },
  {
    icon: Bug,
    name: "Agent-Debugger",
    role: "Bug Fixes & Testing",
    model: "Claude Sonnet",
    focus: "Bug triage, automated testing, edge cases",
  },
  {
    icon: Rocket,
    name: "Agent-DevOps",
    role: "Deployment & Infrastructure",
    model: "Claude Sonnet",
    focus: "CI/CD, VPS monitoring, zero-downtime deploys",
  },
  {
    icon: Palette,
    name: "Agent-UX",
    role: "UI/UX Improvements",
    model: "Claude Sonnet",
    focus: "UI polish, accessibility audits, responsive design",
  },
];

const growthAgents: Agent[] = [
  {
    icon: PenTool,
    name: "Agent-Creator",
    role: "Content & Social Media",
    model: "Claude Sonnet",
    focus: "Blog posts, social media, case studies",
  },
  {
    icon: Video,
    name: "Agent-Videographer",
    role: "Video Production",
    model: "Claude Sonnet",
    focus: "Product demos, tutorials, YouTube content",
  },
  {
    icon: BarChart3,
    name: "Agent-Marketer",
    role: "SEO, Ads & Growth",
    model: "Claude Sonnet",
    focus: "SEO optimization, ad campaigns, landing pages",
  },
  {
    icon: LineChart,
    name: "Agent-Analyst",
    role: "Analytics & Reporting",
    model: "GLM 4.7",
    focus: "Dev velocity, marketing metrics, weekly reports",
  },
];

function AgentCard({ agent }: { agent: Agent }) {
  const IconComponent = agent.icon;
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
        <IconComponent className="text-[var(--energy-orange)] w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h5 className="font-poppins font-semibold text-[var(--charcoal)] text-sm">
            {agent.name}
          </h5>
          <Badge
            variant="outline"
            className="text-[10px] px-1.5 py-0 border-gray-300 text-[var(--medium-gray)]"
          >
            {agent.model}
          </Badge>
        </div>
        <p className="text-xs text-[var(--energy-orange)] font-medium">
          {agent.role}
        </p>
        <p className="text-xs text-[var(--medium-gray)] mt-1">{agent.focus}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const teamMembers = [
    {
      name: "Arun Babu Nalamara",
      role: "Founder & Director",
      description:
        "Seismic Interpreter and development geophysicist with extensive ML and Python expertise",
      gradient: "from-[var(--ocean-blue)] to-blue-600",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--light-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-[var(--charcoal)] mb-4">
            Our Company &{" "}
            <span className="text-[var(--ocean-blue)]">Vision</span>
          </h2>
          <p className="text-xl text-[var(--medium-gray)] max-w-3xl mx-auto">
            Founded in 2017 in Hyderabad, Telangana, AMEYEM has been at the
            forefront of instilling efficiency in G&G activities through
            innovative technology and expert insight.
          </p>
        </div>

        {/* Company Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-poppins font-semibold text-[var(--charcoal)] mb-6">
              Our Mission
            </h3>
            <p className="text-[var(--medium-gray)] mb-6 leading-relaxed">
              AMEYEM Geo Solutions started operations with a mission to instill
              efficiency in G&G activities by leveraging cutting-edge AI/ML
              technologies and deep domain expertise. We bridge the gap between
              traditional geoscience practices and modern computational
              approaches.
            </p>
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-[var(--charcoal)] mb-2">
                  Corporate Information
                </h4>
                <div className="space-y-1 text-sm text-[var(--medium-gray)]">
                  <p>
                    <strong>Company:</strong> AMEYEM GEO SOLUTIONS PRIVATE
                    LIMITED
                  </p>
                  <p>
                    <strong>CIN:</strong> U72900TG2016PTC112396
                  </p>
                  <p>
                    <strong>Location:</strong> Vanasthalipuram, Hyderabad,
                    Rangareddy, Telangana, 500070
                  </p>
                  <p>
                    <strong>Contact:</strong> info@ameyem.com, +91-8800197778
                  </p>
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

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-poppins font-bold text-[var(--charcoal)] text-center mb-12">
            Founder
          </h3>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <User className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-poppins font-semibold text-[var(--charcoal)] mb-2">
                    {member.name}
                  </h4>
                  <p className="text-[var(--energy-orange)] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--medium-gray)]">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Agent Team */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-poppins font-bold text-[var(--charcoal)] mb-3">
              AI Operations Team
            </h3>
            <p className="text-[var(--medium-gray)] max-w-2xl mx-auto">
              A 10-agent AI team that operates autonomously across development
              and marketing — building features, fixing bugs, deploying updates,
              and growing our products around the clock.
            </p>
          </div>

          {/* Director Card — standalone */}
          <div className="max-w-md mx-auto mb-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg border-0">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--energy-orange)] to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-white w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-poppins font-bold text-white text-lg">
                      Agent-Director
                    </h4>
                    <Badge className="bg-[var(--energy-orange)] text-white text-[10px] px-1.5 py-0">
                      Claude Opus
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Overall Coordinator — assigns daily tasks to all 9 agents,
                    runs sprint reviews, and balances dev vs. marketing effort
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dev + Growth grids */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Development Team */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-[var(--ocean-blue)]" />
                <h4 className="font-poppins font-semibold text-[var(--charcoal)]">
                  Development Team
                </h4>
                <Badge
                  variant="outline"
                  className="text-xs border-[var(--ocean-blue)] text-[var(--ocean-blue)]"
                >
                  5 Agents
                </Badge>
              </div>
              <div className="space-y-3">
                {devAgents.map((agent) => (
                  <AgentCard key={agent.name} agent={agent} />
                ))}
              </div>
            </div>

            {/* Marketing / Growth Team */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-[var(--energy-orange)]" />
                <h4 className="font-poppins font-semibold text-[var(--charcoal)]">
                  Marketing & Growth Team
                </h4>
                <Badge
                  variant="outline"
                  className="text-xs border-[var(--energy-orange)] text-[var(--energy-orange)]"
                >
                  4 Agents
                </Badge>
              </div>
              <div className="space-y-3">
                {growthAgents.map((agent) => (
                  <AgentCard key={agent.name} agent={agent} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
