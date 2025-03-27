import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink, Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  projectUrl: string;
  sourceUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-52 object-cover"
        />
        <div 
          className={cn(
            "absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center p-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
          <p className="text-white/90 text-center mb-4">{project.description}</p>
          <div className="flex space-x-3">
            <Button asChild size="sm" variant="default" className="bg-white text-secondary hover:bg-gray-100">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" /> View Project
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Code className="mr-1 h-4 w-4" /> Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-neutral text-sm">{project.shortDescription}</p>
      </div>
    </div>
  );
}
