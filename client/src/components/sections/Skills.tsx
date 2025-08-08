import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { technicalSkills, designSkills } from "@/lib/data";
import { Code, Users, Lightbulb, Target } from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
  color?: 'primary' | 'coral' | 'blue' | 'yellow';
}

function SkillBar({ name, percentage, delay = 0, color = 'primary' }: SkillBarProps) {
  const colorClasses = {
    primary: 'from-teal-500 to-blue-500',
    coral: 'from-coral-500 to-orange-500', 
    blue: 'from-blue-500 to-purple-500',
    yellow: 'from-yellow-500 to-orange-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm font-semibold text-gray-600">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 1.2, ease: "easeOut" }}
          className={`progress-fill bg-gradient-to-r ${colorClasses[color]}`}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <div className="responsive-grid cols-2 mb-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="modern-card p-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
                <p className="text-gray-600">Programming & Development</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                  color={index % 2 === 0 ? 'primary' : 'blue'}
                />
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="modern-card p-8"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Professional Skills</h3>
                <p className="text-gray-600">Leadership & Collaboration</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                  color={index % 2 === 0 ? 'coral' : 'yellow'}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="responsive-grid cols-3"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="modern-card p-6 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
            <p className="text-gray-600">
              Strong analytical thinking and creative problem-solving approach to complex challenges.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="modern-card p-6 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Goal Oriented</h4>
            <p className="text-gray-600">
              Focused on delivering high-quality results and meeting project objectives efficiently.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="modern-card p-6 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Team Player</h4>
            <p className="text-gray-600">
              Excellent collaboration skills with experience leading technical initiatives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}