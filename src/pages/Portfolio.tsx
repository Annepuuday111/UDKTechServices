import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Web Development", "Logo Design", "UI/UX Design"];

const projects = [
  {
    id: 1,
    title: "Poultry Management Application",
    category: "Web Development",
    description:
      "A complete poultry management system for Sri Vana Durga Poultry with operations, records, and monitoring features.",
    image: "https://cdn.britannica.com/56/155656-050-EF76EB04/chickens-poultry-farm.jpg",
  },
  {
    id: 2,
    title: "Enterprise Management Application",
    category: "Web Development",
    description:
      "Enterprise-level management system developed for JR Engineering Enterprises to manage operations and workflows.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Club Management Application",
    category: "Web Development",
    description:
      "A club management platform for Versatales Club including member management, events, and administration.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "PDF Statement Editor",
    category: "Web Development",
    description:
      "A PDF statement editor tool to modify, customize, and manage financial statement documents efficiently.",
    image: "https://media.istockphoto.com/id/488853799/photo/statements-of-operations.jpg?s=612x612&w=0&k=20&c=6_1lUzmC5GGeO6B0TNEd15IlIb7qOmYZNFJWHL3hgj4=",
  },
  {
    id: 5,
    title: "Event Management Application",
    category: "Web Development",
    description:
      "An event management system to handle event planning, registrations, schedules, and attendee management.",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Healthcare Management Application",
    category: "Web Development",
    description:
      "A healthcare management platform for patient records, appointments, reports, and administrative workflows.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "EduTrack – Student Course Management System",
    category: "Web Development",
    description:
      "A comprehensive academic management system for course enrollment, attendance tracking, grading, and performance monitoring.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "TripSphere – Travel Management System",
    category: "Web Development",
    description:
      "A travel management platform for trip planning, itineraries, bookings, and expense coordination.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
  },
];


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
              Our Recent Works
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Explore our collection of successful projects that showcase our expertise and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-card card-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-secondary-foreground" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 section-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your requirements.
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
}
