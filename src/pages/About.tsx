import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Target, Eye, Users, Award, Code, Palette } from "lucide-react";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const technologies = [
  "React", "Node.js", "TypeScript", "Python", "Django", 
  "PostgreSQL", "AWS", "Figma", "Adobe Creative Suite", "Git", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Docker", "MySQL"
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              About Us
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              A passionate team dedicated to delivering exceptional digital solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Empowering Businesses Through <span className="text-gradient">Digital Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unified Digital Knowledge Tech Services was founded with a vision to bridge the gap between businesses and technology. We understand that in today's digital age, having a strong online presence is not just an option it's a necessity.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to deliver solutions that not only meet but exceed client expectations. We believe in building long-term partnerships with our clients, understanding their unique challenges, and crafting tailored solutions that drive real results.
                </p>
                <p>
                  From startups to established enterprises, we've helped businesses across various industries transform their digital presence and achieve their goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-2xl p-8 text-center card-elevated">
                  <div className="font-heading text-4xl font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-10 card-elevated">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology partner for businesses seeking digital transformation. We envision a world where every business, regardless of size, has access to world-class digital solutions that help them compete and succeed in the global marketplace.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10 card-elevated">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative, reliable, and scalable digital solutions that empower businesses to achieve their goals. We are committed to excellence in every project, maintaining the highest standards of quality, and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", description: "We strive for excellence in every project we undertake." },
              { icon: Users, title: "Collaboration", description: "We work closely with clients as true partners." },
              { icon: Code, title: "Innovation", description: "We embrace new technologies and creative solutions." },
              { icon: Palette, title: "Creativity", description: "We bring fresh perspectives to every challenge." },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Technologies We Use
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage the latest technologies to build modern, scalable solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-6 py-3 bg-card rounded-full font-medium text-foreground shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground max-w-2xl mx-auto">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-xl mx-auto">
            Let's discuss how we can help transform your business.
          </p>
          <div className="mt-10">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
