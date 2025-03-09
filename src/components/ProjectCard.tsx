// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="neo-box overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="border-b-4 border-black h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            (
              e.target as HTMLImageElement
            ).src = `https://placehold.co/800x500/${
              index % 2 === 0 ? "00FF66" : "FF90E8"
            }/000000?text=${project.title}`;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4 dark:text-white">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-2 py-1 text-sm border-2 border-black ${
                i % 3 === 0
                  ? "bg-neo-pink dark:bg-neo-blue"
                  : i % 3 === 1
                  ? "bg-neo-blue dark:bg-neo-pink"
                  : "bg-neo-yellow dark:bg-neo-green"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-button bg-neo-green dark:bg-neo-yellow inline-block text-sm"
            >
              LIVE DEMO
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-button bg-neo-blue dark:bg-neo-pink inline-block text-sm"
            >
              GITHUB REPO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
