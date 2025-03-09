// src/pages/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

interface ProjectProps {
  navigateTo: (section: string) => void;
}

const Projects = ({ navigateTo }: ProjectProps) => {
  const [filter, setFilter] = useState("all");

  // Extract unique technologies from all projects
  const allTechnologies = [
    "all",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  // Filter projects based on selected technology
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <div className="bg-light-bg dark:bg-dark-bg animate-fadeIn text-black dark:text-white min-h-screen">
      <div className="page-container">
        <motion.h1
          className="section-title"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-black dark:text-white inline-block relative">
            PROJECTS
            <span className="absolute -bottom-3 left-0 w-full h-6 bg-red-500 -z-10 transform -rotate-1"></span>
          </h2>
        </motion.h1>

        {/* Filter Buttons */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Filter by technology:</h2>
          <div className="flex flex-wrap gap-3">
            {allTechnologies.map((tech, index) => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 border-4 border-black font-bold transition-all ${
                  filter === tech
                    ? "bg-black text-white"
                    : "bg-neo-yellow dark:bg-neo-pink hover:bg-neo-pink dark:hover:bg-neo-yellow"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-2xl font-bold">
                No projects found with the selected technology.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 neo-button bg-neo-blue dark:bg-neo-pink"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center py-10 neo-box bg-neo-green dark:bg-neo-blue"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto dark:text-white">
            I'm always open to discussing product design work or partnership
            opportunities.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              onClick={() => navigateTo("contact")}
              className="px-8 py-4 bg-blue-500 text-white font-bold rounded-none transform hover:translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
            >
              START A CONVERSATION
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <section className="animate-fadeIn">
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-black dark:text-white inline-block relative">
              MY PROJECTS
              <span className="absolute -bottom-3 left-0 w-full h-6 bg-red-500 -z-10 transform -rotate-1"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "A full-stack e-commerce solution with payment integration",
                  tags: ["React", "Node.js", "MongoDB"],
                  color: "bg-yellow-400",
                },
                {
                  title: "Task Management App",
                  description:
                    "Productivity app with real-time collaboration features",
                  tags: ["Next.js", "Firebase", "Tailwind CSS"],
                  color: "bg-red-500",
                },
                {
                  title: "Health Tracker",
                  description:
                    "Mobile app for tracking fitness and nutrition goals",
                  tags: ["React Native", "GraphQL", "AWS"],
                  color: "bg-blue-500",
                },
                {
                  title: "Portfolio Generator",
                  description:
                    "Tool for designers to create portfolios without coding",
                  tags: ["Vue.js", "Express", "PostgreSQL"],
                  color: "bg-green-500",
                },
                {
                  title: "Community Forum",
                  description: "Discussion platform with moderation tools",
                  tags: ["React", "Django", "Redis"],
                  color: "bg-purple-500",
                },
                {
                  title: "Weather Dashboard",
                  description:
                    "Real-time weather visualization with historical data",
                  tags: ["TypeScript", "D3.js", "Node.js"],
                  color: "bg-pink-500",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-black border-8 border-black dark:border-white p-6 transform transition-all duration-300 hover:translate-y-2 hover:translate-x-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
                >
                  <div
                    className={`${project.color} h-48 mb-6 relative overflow-hidden border-4 border-black dark:border-white group-hover:rotate-2 transition-transform`}
                  >
                    <img
                      src="/api/placeholder/400/300"
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm font-bold text-black dark:text-white border-2 border-black dark:border-white transform -rotate-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-bold border-2 border-black dark:border-white transform hover:rotate-1 transition-transform">
                    VIEW PROJECT
                  </button>
                </div>
              ))}
            </div>
          </section> */
}
