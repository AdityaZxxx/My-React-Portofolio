interface HomePageProps {
  navigateTo: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <section className="animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-black dark:text-white transition-colors duration-300">
            HI, I'M{" "}
            <span className="relative inline-block animate-bounce">
              <span className="relative z-10">ADITYA</span>
              <span className="absolute -bottom-2 left-0 w-full h-6 bg-red-500 -z-10 transform -rotate-2"></span>
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black dark:text-white">
            SOFTWARE{" "}
            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 transform rotate-1 inline-block">
              DEVELOPER
            </span>
          </h2>
          <p className="text-xl mb-10 text-gray-700 dark:text-gray-300">
            I build exceptional digital experiences with clean code and brutal
            design.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo("projects")}
              className="px-8 py-4 bg-red-500 text-white font-bold rounded-none transform hover:translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
            >
              SEE MY WORK
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-none transform hover:translate-x-2 transition-transform shadow-[8px_8px_0px_0px_rgba(255,0,0,0.8)]"
            >
              CONTACT ME
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-yellow-400 rounded-none transform rotate-6 animate-float"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-red-500 rounded-none absolute top-8 left-8 -z-10 transform -rotate-3 animate-float2"></div>
            <img
              src="https://res.cloudinary.com/dbg7s7ai2/image/upload/v1741431551/profile_aajcer.jpg"
              alt="Developer Portrait"
              className="w-64 h-64 md:w-80 md:h-80 object-cover absolute top-4 left-4 border-8 border-black dark:border-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 p-10 bg-gray-100 dark:bg-gray-900 border-8 border-black dark:border-white transform -rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.8)]">
        <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
          TECH STACK
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            "React",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "PostgresQL",
            "Docker",
            "Next.js",
            "Tailwind CSS",
          ].map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white font-bold border-4 border-black dark:border-white transform transition-transform hover:scale-110 hover:rotate-3"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
