import paceLogo from "@/assets/pace_logo.png";
import srichaitanyaLogo from "@/assets/srichaitanya_logo.jpg";
import sreeBharathiLogo from "@/assets/sree_bharathi_logo.jpg";
import acmLogo from "@/assets/acm_logo.jpg";
import bitsilicaLogo from "@/assets/bitsilica_logo.jpg";

// Technical Skills
export const technicalSkills = [
  { name: "C", percentage: 90 },
  { name: "Embedded C", percentage: 85 },
  { name: "Python", percentage: 90 },
  { name: "HTML/CSS/JavaScript", percentage: 80 },
  { name: "Data Structures & Algorithms", percentage: 85 },
  { name: "Linux", percentage: 80 },
  { name: "OOPs", percentage: 85 },
  { name: "DBMS", percentage: 90 },
  { name: "MySQL", percentage: 90 },
  { name: "Git & GitHub", percentage: 85 },
  { name: "RTOS", percentage: 80 }
];

// Additional Skills
export const designSkills = [
  { name: "Leadership", percentage: 90 },
  { name: "Problem-Solving", percentage: 90 },
  { name: "Critical Thinking", percentage: 90 },
  { name: "Team Collaboration", percentage: 85 },
  { name: "ACM Student Chapter Chair", percentage: 95 }
];

// Education
export const education = [
  {
    type: "degree",
    title: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    institution: "PACE Institute of Technology & Sciences, Ongole, Andhra Pradesh",
    period: "Sep 2021 - May 2025",
    description: "Graduated in May 2025 with 8.63/10 CGPA. Chair of ACM (Association for Computing Machinery) Student Chapters, leading multiple tech initiatives.",
    iconBg: "#e6f0ff", // light blue
    iconColor: "#3b82f6", // primary color
    logo: paceLogo
  },
  {
    type: "education",
    title: "Intermediate (MPC, State Syllabus)",
    institution: "Sri Chaitanya Junior College, Eluru, Andhra Pradesh",
    period: "June 2019 - April 2021",
    description: "Completed with 789/1000 marks (78.9%)",
    iconBg: "#fdf2f8", // light pink
    iconColor: "#ec4899", // pink
    logo: srichaitanyaLogo
  },
  {
    type: "education",
    title: "SSC (State Syllabus)",
    institution: "Sri Bharathi High School, Eluru, Andhra Pradesh",
    period: "June 2018 - April 2019",
    description: "Completed with 9.2/10 CGPA",
    iconBg: "#ede9fe", // light purple
    iconColor: "#8b5cf6", // purple
    logo: sreeBharathiLogo
  }
];

// Certifications
export const certifications = [
  {
    title: "Artificial Intelligence Primer Certification",
    institution: "Infosys Springboard",
    period: "January 2024",
    description: "Acquired knowledge in AI fundamentals and practical applications."
  },
  {
    title: "PCAP-Programming Essentials in Python",
    institution: "Cisco",
    period: "March 2023",
    description: "Mastered Python programming fundamentals and essential techniques."
  },
  {
    title: "Introduction to Internet of Things",
    institution: "NPTEL",
    period: "January - April 2024",
    description: "Learned about IoT architecture, implementation, and applications."
  }
];

// Leadership Experience
export const leadership = [
  {
    title: "Chair – ACM Student Chapter",
    institution: "PACE Institute of Technology & Sciences",
    period: "2021 - 2025",
    membershipId: "8730306",
    organization: "Association for Computing Machinery (ACM)",
    responsibilities: [
      "Leadership & Coordination: Directed the ACM Student Chapter, managing all technical, academic, and community initiatives to strengthen the computing culture on campus.",
      "Event Management: Organized coding competitions, technical workshops, hackathons, and seminars featuring industry professionals and alumni.",
      "Team Supervision: Led a team of coordinators and volunteers, delegating tasks, mentoring members, and ensuring effective collaboration with faculty advisors.",
      "Innovation & Outreach: Launched innovative programs promoting research, open-source contributions, and skill development among students.",
      "Networking: Built partnerships with other ACM chapters and external organizations to expand learning and professional opportunities.",
      "Mentorship: Guided junior members and nurtured future student leaders for sustainable chapter growth."
    ],
    iconBg: "#dbeafe",
    iconColor: "#3b82f6",
    logo: acmLogo
  }
];

// Helper to handle public assets with base path
const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// Internships
export const internships = [
  {
    title: "Intern",
    institution: "Bitsilica",
    period: "June 2025 - Present",
    description: "Developed modules using C and Python for embedded system applications. Learned industry practices in coding, debugging, and version control. Gained expertise in Embedded C, Python, OOP, Linked List, Linux, Microcontrollers, RTOS, Git, and GitHub.",
    iconBg: "#f0fdf4", // light green
    iconColor: "#10b981", // green
    logo: getAssetPath("bitsilica.jfif")
  },
  {
    title: "CodeTantra Internship",
    institution: "CodeTantra",
    period: "April 2023 - June 2023",
    description: "Completed internship with a focus on web development. Developed a mini project on Interactive Quiz application, gaining practical experience in frontend and backend technologies.",
    iconBg: "#dbeafe", // light blue
    iconColor: "#3b82f6", // blue
    logo: getAssetPath("codetantra.jpg")
  },
  {
    title: "Cyber Security Virtual Internship",
    institution: "EduSkills (Palo Alto Cybersecurity Academy)",
    period: "December 2022 - February 2023",
    description: "Gained hands-on experience in cybersecurity practices and tools, including threat detection, vulnerability assessment, and security implementation strategies.",
    iconBg: "#fee2e2", // light red
    iconColor: "#ef4444", // red
    logo: getAssetPath("eduskills.png")
  }
];

// Projects
export const projects = [
  {
    title: "Web Cloud Data Storage System",
    description: "Architected a scalable cloud storage platform with CP-ABE (Ciphertext-Policy Attribute-Based Encryption) for enhanced data security. Implemented end-to-end encryption mechanism reducing unauthorized data access by 95%. Optimized multi-threaded request handling, improving system performance by 30%.",
    image: getAssetPath("images/web-cloud-project.svg"),
    tags: ["Java (J2EE)", "JSP", "Servlets", "JavaScript", "MySQL"],
    demoUrl: "https://github.com/hemu-madu/WebCloud-Web-Based-Cloud-Storage-for-Secure-Data-Sharing-across-Platforms",
    githubUrl: "https://github.com/hemu-madu/WebCloud-Web-Based-Cloud-Storage-for-Secure-Data-Sharing-across-Platforms"
  },
  {
    title: "Interactive Quiz Application",
    description: "Engineered real-time quiz platform with dynamic scoring algorithm. Developed responsive backend reducing query response time by 40%. Implemented user engagement features increasing platform interaction by 30%. Utilized MongoDB for efficient data management and scalable architecture.",
    image: getAssetPath("images/quiz-app-project.svg"),
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    demoUrl: "https://github.com/hemu-madu/Interactive-Quiz",
    githubUrl: "https://github.com/hemu-madu/Interactive-Quiz"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase my skills, projects, education, and professional experience. Built with modern web technologies and responsive design principles to provide an optimal viewing experience across all devices.",
    image: getAssetPath("portfolio_v2.png"),
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    demoUrl: "https://github.com/hemu-madu/Hemanth-Madu-Portfolio",
    githubUrl: "https://github.com/hemu-madu/Hemanth-Madu-Portfolio"
  }
];
