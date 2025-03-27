import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SectionHeading from "@/components/ui/section-heading";
import SkillBar from "@/components/ui/skill-bar";
import { 
  Code, Smartphone, PaintBrush, Server, Network, ListChecks
} from "lucide-react";

const technicalSkills = [
  { name: "HTML5/CSS3", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 80 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "TypeScript", percentage: 75 }
];

const otherSkills = [
  { 
    name: "Git/GitHub", 
    description: "Version Control",
    icon: <Code className="text-secondary" />
  },
  { 
    name: "Responsive Design", 
    description: "Mobile-First",
    icon: <Smartphone className="text-secondary" />
  },
  { 
    name: "UI/UX Design", 
    description: "Figma & Adobe XD",
    icon: <PaintBrush className="text-secondary" />
  },
  { 
    name: "RESTful APIs", 
    description: "Integration",
    icon: <Server className="text-secondary" />
  },
  { 
    name: "State Management", 
    description: "Redux & Context",
    icon: <Network className="text-secondary" />
  },
  { 
    name: "Agile/Scrum", 
    description: "Methodology",
    icon: <ListChecks className="text-secondary" />
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 bg-background transition-all duration-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Skills" 
          description="Here are the technologies and tools I'm proficient with. I'm constantly learning and adding new skills to my toolkit."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            {technicalSkills.map((skill) => (
              <SkillBar 
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="text-sm text-gray-500">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
