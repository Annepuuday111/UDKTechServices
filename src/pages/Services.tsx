import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Globe, 
  Palette, 
  Layers, 
  Check,
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  Building2,
  Lightbulb,
  PenTool,
  Brush
} from "lucide-react";

const webDevServices = [
  {
    icon: Building2,
    title: "Static Websites",
    description: "Fast, secure, and cost-effective websites perfect for company portfolios and landing pages.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Easy to Maintain"],
  },
  {
    icon: Code,
    title: "Dynamic Web Apps",
    description: "Full-featured web applications with backend functionality, user authentication, and real-time features.",
    features: ["User Authentication", "Database Integration", "API Development", "Admin Dashboards"],
  },
  {
    icon: ShoppingCart,
    title: "Business Websites",
    description: "Professional business websites with content management, analytics, and lead generation capabilities.",
    features: ["CMS Integration", "Analytics Setup", "Contact Forms", "Lead Tracking"],
  },
];

const logoServices = [
  {
    icon: Lightbulb,
    title: "Brand Identity",
    description: "Complete brand identity packages including logo, color palette, and typography guidelines.",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
  },
  {
    icon: PenTool,
    title: "Minimal Logos",
    description: "Clean, modern logos that communicate your brand essence with simplicity and elegance.",
    features: ["Vector Format", "Multiple Variations", "Scalable Design", "Icon Version"],
  },
  {
    icon: Brush,
    title: "Business Branding",
    description: "Comprehensive branding solutions for business cards, letterheads, and marketing materials.",
    features: ["Business Cards", "Letterhead", "Social Media Kit", "Print Materials"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business, goals, and target audience.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Strategic planning and project roadmap development.",
  },
  {
    step: "03",
    title: "Design",
    description: "Creating visual concepts and prototypes for approval.",
  },
  {
    step: "04",
    title: "Development",
    description: "Building your solution with clean, efficient code.",
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing to ensure quality and performance.",
  },
  {
    step: "06",
    title: "Launch",
    description: "Deployment and ongoing support for your project.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Comprehensive digital solutions designed to help your business thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section id="web-development" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
              <Globe className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Web Development
              </h2>
              <p className="text-muted-foreground">Custom web solutions for every need</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webDevServices.map((service) => (
              <div 
                key={service.title}
                className="bg-card rounded-2xl p-8 card-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Design */}
      <section id="logo-design" className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
              <Palette className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Logo Design
              </h2>
              <p className="text-muted-foreground">Build a memorable brand identity</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {logoServices.map((service) => (
              <div 
                key={service.title}
                className="bg-card rounded-2xl p-8 card-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section id="ui-ux" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
              <Layers className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                UI/UX Design
              </h2>
              <p className="text-muted-foreground">Creating intuitive user experiences</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  User-Centered Design Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We create digital experiences that delight users and drive conversions. Our design process focuses on understanding user needs and business goals to create interfaces that are both beautiful and functional.
                </p>
                <ul className="space-y-3">
                  {["User Research & Testing", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Usability Testing"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square bg-accent rounded-2xl flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-secondary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology for delivering successful projects
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="text-4xl font-heading font-bold text-secondary/20">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground max-w-2xl mx-auto">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-xl mx-auto">
            Get in touch today and let's discuss how we can help your business grow.
          </p>
          <div className="mt-10">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
