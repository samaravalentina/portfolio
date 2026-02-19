"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          Vamos conversar?
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Estou aberta a oportunidades como Desenvolvedora Full Stack.
          Entre em contato por email ou WhatsApp.
        </motion.p>

        {/* Botões principais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Email */}
          <a
            href="mailto:samaravalentina6@gmail.com"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
          >
            <FaEnvelope />
            Email
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5585992184393?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-green-500 text-green-500 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </motion.div>

        {/* Links secundários */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-400"
        >
          <a
            href="https://github.com/samaravalentina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/samara-valentina-da-silva-411115179"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
