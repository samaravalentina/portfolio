"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Stock Control",
    description:
      "Sistema Full Stack de controle de estoque desenvolvido como desafio técnico, com backend em Spring Boot e frontend em React (Vite). Projeto publicado com integração completa e testes de integração via Cypress.",
    stack: "Spring Boot • React (Vite) • MySQL • Cypress",
    features: [
      "API REST estruturada em Spring Boot",
      "Integração com banco de dados MySQL",
      "Testes de integração com Cypress",
      "Frontend publicado na Vercel",
    ],
    github: "https://github.com/samaravalentina/stock-control",
    demo: "https://stock-control-roan.vercel.app",
  },
  {
    title: "API REST Comercial",
    description:
      "Backend em Node.js + Express para gerenciamento de usuários, categorias e produtos, com autenticação JWT, upload de imagens e documentação interativa via Swagger.",
    stack: "Node.js • Express • JWT • Swagger",
    features: [
      "Autenticação JWT",
      "Upload de imagens",
      "Estrutura modular de rotas",
      "Documentação interativa com Swagger",
    ],
    github: "https://github.com/samaravalentina/projeto-backend",
    demo: null,
  },
  {
    title: "Kanban Full Stack",
    description:
      "Aplicação de gerenciamento de tarefas com três colunas fixas, integrando frontend em React e backend em Go, com manipulação de estado e API REST.",
    stack: "React • Go • API REST",
    features: [
      "Integração entre frontend e backend",
      "Manipulação de estado no React",
      "Backend em Go",
    ],
    github: "https://github.com/samaravalentina/desafio-fullstack-veritas",
    demo: null,
  },
  {
    title: "Digital Store",
    description:
      "Aplicação front-end de e-commerce desenvolvida com React e Vite, com foco em arquitetura escalável, componentização reutilizável, roteamento estruturado e layout consistente. Projeto publicado na Vercel.",
    stack: "React • Vite • React Router DOM v6 • Tailwind CSS • Git & GitHub • Vercel",
    features: [
      "Página inicial (Home) e navegação completa",
      "Listagem de produtos e página de detalhes",
      "Área do usuário (pedidos, informações, métodos de pagamento)",
      "Páginas de Login e Not Found (404)",
      "Layout e componentes reutilizáveis",
    ],
    github: "https://github.com/samaravalentina/digital-store",
    demo: "https://digital-store-beta-gilt.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
          Projetos
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <p className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-400">
                Stack: {project.stack}
              </p>

              <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                {project.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <div className="flex gap-6 text-sm text-blue-600">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                    <FaGithub />
                    Repositório
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
