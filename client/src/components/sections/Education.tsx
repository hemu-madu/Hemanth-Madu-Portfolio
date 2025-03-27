import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SectionHeading from "@/components/ui/section-heading";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

const educationItems = [
  {
    period: "2019 - 2023",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    icon: <GraduationCap className="text-white" />,
    description: "Graduated with honors, focusing on web development and user interface design. Relevant coursework included:",
    courses: [
      "Advanced JavaScript Programming",
      "User Experience Design",
      "Modern Web Development",
      "Data Structures & Algorithms"
    ]
  },
  {
    period: "2023",
    degree: "Frontend Web Development",
    institution: "Udemy & Coursera",
    icon: <Award className="text-white" />,
    description: "Completed specialized courses to enhance my frontend development skills:",
    courses: [
      "React - The Complete Guide",
      "Advanced CSS and Sass",
      "JavaScript - Understanding the Weird Parts",
      "TypeScript Masterclass"
    ]
  }
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      id="education" 
      ref={sectionRef}
      className={`py-20 bg-background-alt transition-all duration-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education" 
          description="My academic journey that has helped me build a strong foundation."
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Education timeline items */}
            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative z-10 ${index !== educationItems.length - 1 ? 'mb-12' : ''}`}
              >
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <span className="inline-block py-1 px-3 bg-blue-50 text-secondary text-sm font-medium rounded-full mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <p className="text-neutral">{item.institution}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      <ul className="text-gray-600 space-y-1">
                        {item.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-accent mt-1 mr-2" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
