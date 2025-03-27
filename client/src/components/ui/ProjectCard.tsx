import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full transition-transform duration-500"
            style={{ 
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
            style={{ 
              opacity: isHovered ? 1 : 0, 
              transition: 'opacity 0.3s ease'
            }}
          >
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex justify-between items-center">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-blue-700 font-medium flex items-center"
            >
              View Project
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            <a 
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-700"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
