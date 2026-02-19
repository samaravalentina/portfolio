"use client";

import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaJava, 
  FaGithub, 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiGo, 
  SiSpringboot, 
  SiMysql, 
  SiCypress, 
  SiVisualstudiocode 
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Go", icon: <SiGo /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Ferramentas & Testes",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Cypress", icon: <SiCypress /> },
    ],
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Tecnologias
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {techGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-3xl text-gray-600 dark:text-gray-400">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                  >
                    {tech.icon}
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
