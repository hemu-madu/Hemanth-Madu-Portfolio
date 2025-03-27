import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

// Project categories
type ProjectCategory = "all" | "web" | "ui" | "other";

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    description: "A responsive e-commerce platform with product filtering and cart functionality.",
    shortDescription: "A fully responsive e-commerce website with modern design and functionality.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Redux", "Tailwind CSS"],
    projectUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 2,
    title: "Dashboard UI Design",
    category: "ui",
    description: "A clean and intuitive admin dashboard with data visualization.",
    shortDescription: "A modern dashboard interface with focus on user experience and data visualization.",
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Figma", "UI/UX", "Prototyping"],
    projectUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 3,
    title: "Weather Application",
    category: "web",
    description: "A weather forecasting app that uses APIs to display current and future weather conditions.",
    shortDescription: "A weather app with location detection and 5-day forecast information.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "API", "CSS3"],
    projectUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 4,
    title: "Blog Website",
    category: "other",
    description: "A tech blog with content management system and responsive design.",
    shortDescription: "A full-stack blog application with user authentication and content management.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    projectUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 5,
    title: "Mobile App Design",
    category: "ui",
    description: "A fitness tracking mobile app UI design with user-friendly interface.",
    shortDescription: "A fitness app UI design with activity tracking, social features, and personalized workouts.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Figma", "UI/UX", "Mobile"],
    projectUrl: "#",
    sourceUrl: "#"
  },
  {
    id: 6,
    title: "Task Manager",
    category: "web",
    description: "A productivity app for managing daily tasks with drag-and-drop functionality.",
    shortDescription: "A task management application with categories, due dates, and priority levels.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Firebase", "Drag & Drop"],
    projectUrl: "#",
    sourceUrl: "#"
  }
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  
  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category);
  };
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className={`py-20 bg-background transition-all duration-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Portfolio" 
          description="A showcase of my recent projects and work. Each project represents my skills and passion for web development."
        />
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "secondary"}
              onClick={() => handleFilterChange("all")}
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === "web" ? "default" : "secondary"}
              onClick={() => handleFilterChange("web")}
            >
              Web Apps
            </Button>
            <Button
              variant={activeFilter === "ui" ? "default" : "secondary"}
              onClick={() => handleFilterChange("ui")}
            >
              UI Design
            </Button>
            <Button
              variant={activeFilter === "other" ? "default" : "secondary"}
              onClick={() => handleFilterChange("other")}
            >
              Other
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
