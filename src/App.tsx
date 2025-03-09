import { Code, Home, Image, Menu, MessageSquare, User, X } from "lucide-react";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (section: string) => {
    setCurrentSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative transition-colors duration-300 bg-white dark:bg-black">
      {/* Navigation Bar */}
      <nav className="p-6 flex justify-between items-center border-b-8 border-black dark:border-white transition-colors">
        <div className="flex items-center">
          <h1 className="text-3xl font-black tracking-wider text-black dark:text-white transition-colors duration-300 transform hover:scale-105">
            DEV<span className="text-red-600">.ADITYA</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "projects", "gallery", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item)}
              className={`text-lg font-bold uppercase transition-all duration-200 transform hover:scale-110
                ${
                  currentSection === item
                    ? "bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-none rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
                    : "text-black dark:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleMenu}
            className="p-2 bg-red-500 text-white rounded-none transform -rotate-3 hover:rotate-3 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col pt-24 px-6 gap-6 bg-white dark:bg-black border-8 border-black dark:border-white md:hidden animate-slideIn">
          {[
            { name: "home", icon: <Home size={24} /> },
            { name: "about", icon: <User size={24} /> },
            { name: "projects", icon: <Code size={24} /> },
            { name: "gallery", icon: <Image size={24} /> },
            { name: "contact", icon: <MessageSquare size={24} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => navigateTo(item.name)}
              className={`flex items-center gap-4 text-2xl font-bold uppercase py-4 px-6 transition-all duration-200
                ${
                  currentSection === item.name
                    ? "bg-black text-white dark:bg-white dark:text-black rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
                    : "text-black dark:text-white"
                }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 transition-all duration-500">
        {/* Home Section */}
        {currentSection === "home" && <HomePage navigateTo={navigateTo} />}

        {/* About Section */}
        {currentSection === "about" && <About />}

        {/* Projects Section */}
        {currentSection === "projects" && <Projects navigateTo={navigateTo} />}

        {/* Gallery Section */}
        {currentSection === "gallery" && <Gallery />}

        {/* Contact Section */}
        {currentSection === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <footer className="border-t-8 border-black dark:border-white mt-20 py-8 px-6 bg-white dark:bg-black transition-colors">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-black dark:text-white font-bold mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DEV.ADITYA
          </p>
          <div className="flex gap-6">
            {["Home", "About", "Projects", "Gallery", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item.toLowerCase())}
                className="text-black dark:text-white font-medium hover:underline"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
