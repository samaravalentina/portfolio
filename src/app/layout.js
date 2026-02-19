import "./globals.css"

export const metadata = {
  title: "Samara Valentina | Portfólio",
  description: "Desenvolvedora Frontend Júnior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}