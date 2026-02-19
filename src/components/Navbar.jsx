import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
    
    return (
        <nav className="w-full border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6x1 mx-auto flex px-6 py-4 justify-between items-center">
                <h1 className="font-semibold text-lg">
                    Samara Valentina
                </h1>

                <div className="flex items-center gap-6 text-sm">
                    <a href="#about" className="hover:text-blue-600 transition">
                        Sobre
                    </a>
                    <a href="#projects" className="hover:text-blue-600 transition">
                        Projetos
                    </a>
                    <a href="#contact" className="hover:text-blue-600 transition">
                        Contato
                    </a>
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    );
}