export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Desenvolvedora Full Stack
        <span className="text-blue-600">
          {" "}com experiência em múltiplas arquiteturas web
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Experiência no desenvolvimento de aplicações completas,
        utilizando tecnologias como React, Node.js, Spring Boot e Go.
        Capacidade de adaptação a diferentes contextos técnicos,
        integração com bancos de dados e construção de APIs REST.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Ver Projetos
        </a>

        <a
          href="/Samara-Valentina-Full-Stack-Developer.pdf"
          className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Baixar CV
        </a>
      </div>
    </section>
  );
}
