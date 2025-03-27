import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin, Mail, GraduationCap, Heart } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 bg-background-alt transition-all duration-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a <span className="font-semibold">Frontend Developer</span> with a strong foundation in modern web technologies. 
              I recently graduated with a degree in Computer Science and am passionate about creating intuitive and engaging web experiences.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey into web development began during my college years, where I discovered my love for bringing designs to life through code. 
              I enjoy the perfect blend of creativity and logic that frontend development offers.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sketching UI designs. 
              I'm constantly learning and improving my skills to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-secondary" /> New York, USA
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-secondary" /> john@example.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Study</h3>
                <p className="text-gray-600 flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2 text-secondary" /> B.S. Computer Science
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Interests</h3>
                <p className="text-gray-600 flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-secondary" /> Web Design, UX/UI
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
                alt="Developer working on code" 
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
