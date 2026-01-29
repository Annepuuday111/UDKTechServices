import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Globe, 
  Palette, 
  Layers, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  DollarSign,
  ArrowRight
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Memorable brand identities that capture your company's essence and values.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered designs that create seamless digital experiences for your customers.",
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Professional Team",
    description: "Expert developers and designers with years of industry experience.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects within agreed timelines.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Future-proof solutions that grow with your business needs.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality or features.",
  },
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
  },
  {
    title: "TechStart Brand Identity",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "FinTech Mobile App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Technology background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up">
              Reliable Digital Solutions for Modern Businesses
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-primary-foreground/80 animate-fade-up stagger-1">
              Web Development & Logo Design Services that help your business stand out and succeed in the digital age.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up stagger-2">
              <Button asChild variant="cta" size="xl">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`bg-card rounded-2xl p-8 card-elevated animate-fade-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="mt-6 inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-gradient">UK Tech Services</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're committed to delivering excellence in every project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className={`text-center animate-fade-up stagger-${index + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                A glimpse of our recent work
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`group rounded-2xl overflow-hidden card-elevated animate-fade-up stagger-${index + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-card">
                  <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground max-w-2xl mx-auto">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="mt-10">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
