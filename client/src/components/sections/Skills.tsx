import { motion } from "framer-motion";
import { technicalSkills, designSkills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Cpu, Globe, Database, Code2, Terminal, Layers, Users, Lightbulb, GitBranch } from "lucide-react";

export default function Skills() {
  // Manual categorization of technical skills
  const languages = technicalSkills.filter(s =>
    ["C", "Embedded C", "Python", "OOPs", "Data Structures & Algorithms"].includes(s.name));

  const webAndDb = technicalSkills.filter(s =>
    ["HTML/CSS/JavaScript", "DBMS", "MySQL"].includes(s.name));

  const tools = technicalSkills.filter(s =>
    ["Linux", "Git & GitHub", "RTOS"].includes(s.name));

  const getAllSkills = () => [...technicalSkills, ...designSkills];

  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("python")) return <i className="devicon-python-plain text-lg" />;
    if (n.includes("java")) return <i className="devicon-javascript-plain text-lg" />;
    if (n.includes("html")) return <i className="devicon-html5-plain text-lg" />;
    if (n.includes("c")) return <span className="font-bold text-xs">C</span>;
    if (n.includes("mysql") || n.includes("dbms")) return <Database className="w-4 h-4" />;
    if (n.includes("git")) return <GitBranch className="w-4 h-4" />;
    if (n.includes("linux")) return <Terminal className="w-4 h-4" />;
    return <Code2 className="w-4 h-4" />;
  }

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] opacity-5"
        >
          <Code2 className="w-24 h-24 text-primary" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[10%] opacity-5"
        >
          <Database className="w-32 h-32 text-blue-500" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[5%] text-6xl font-mono font-bold text-primary/5 select-none"
        >
          {"{ }"}
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-[5%] text-6xl font-mono font-bold text-blue-500/5 select-none"
        >
          {"</>"}
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-gradient-primary">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical abilities and professional skills.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-4 bg-neu-light dark:bg-neu-dark shadow-neumorph-pressed dark:shadow-neumorph-pressed-dark p-2 rounded-full">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:shadow-neumorph dark:data-[state=active]:shadow-neumorph-dark data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">All</TabsTrigger>
              <TabsTrigger value="languages" className="rounded-full data-[state=active]:shadow-neumorph dark:data-[state=active]:shadow-neumorph-dark data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Code</TabsTrigger>
              <TabsTrigger value="web" className="rounded-full data-[state=active]:shadow-neumorph dark:data-[state=active]:shadow-neumorph-dark data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Web</TabsTrigger>
              <TabsTrigger value="professional" className="rounded-full data-[state=active]:shadow-neumorph dark:data-[state=active]:shadow-neumorph-dark data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Pro</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...languages, ...webAndDb, ...tools, ...designSkills].map((skill, idx) => (
                <SkillCard key={idx} skill={skill} idx={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="languages" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} idx={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...webAndDb, ...tools].map((skill, idx) => (
                <SkillCard key={idx} skill={skill} idx={idx} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professional" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} idx={idx} isPro />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function SkillCard({ skill, idx, isPro = false }: { skill: any, idx: number, isPro?: boolean }) {
  // Determine icon based on skill name
  const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("python")) return <i className="devicon-python-plain text-2xl" />;
    if (n.includes("java")) return <i className="devicon-javascript-plain text-2xl" />;
    if (n.includes("html") || n.includes("css")) return <i className="devicon-html5-plain text-2xl" />;
    if (n.includes("react")) return <i className="devicon-react-original text-2xl" />;
    if (n.includes("c") && !n.includes("css")) return <span className="font-bold text-lg font-mono">C</span>;
    if (n.includes("sql") || n.includes("db")) return <Database className="w-6 h-6" />;
    if (n.includes("git")) return <GitBranch className="w-6 h-6" />;
    if (n.includes("linux")) return <Terminal className="w-6 h-6" />;
    if (n.includes("leader") || n.includes("manage")) return <Users className="w-6 h-6" />;
    if (n.includes("problem") || n.includes("thinking")) return <Lightbulb className="w-6 h-6" />;
    if (n.includes("acm")) return <Code2 className="w-6 h-6" />;
    return <Layers className="w-6 h-6" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={`bg-neu-light dark:bg-neu-dark shadow-neumorph-sm dark:shadow-neumorph-dark-sm hover:shadow-neumorph dark:hover:shadow-neumorph-dark transition-all duration-300 rounded-2xl p-5 border border-white/20 dark:border-white/5 group flex flex-col items-center justify-center gap-3 h-full ${isPro ? 'hover:border-green-500/30' : 'hover:border-primary/30'}`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isPro ? 'bg-green-100/50 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-primary/5 text-primary'} group-hover:scale-110 transition-transform duration-300`}>
        {getIcon(skill.name)}
      </div>
      <h3 className="font-medium text-sm text-center leading-tight">{skill.name}</h3>
    </motion.div>
  );
}