import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const researchProjects = [
    {
      title: "AI-Driven Self-Healing CI/CD Pipeline",
      category: "DevOps & AI",
      description:
        "An autonomous system that detects pipeline failures and injects AI-generated code fixes, reducing MTTR by 77%.",
      stack: ["Python", "PyTorch", "Docker", "Jenkins"],
      link: "https://github.com/prakharr5",
    },
    {
      title: "Smart EV Digital Cockpit",
      category: "IoT & Embedded Systems",
      description:
        "Production-ready EV dashboard with Digital Twin visualization. Decouples sensor data from UI using WebSockets for 60 FPS performance.",
      stack: ["Flutter", "Python", "IoT", "Raspberry Pi"],
      link: "https://github.com/prakharr5",
    },
    {
      title: "Jotto Solver (Research)",
      category: "Algorithms & Graph Theory",
      description:
        "Research-based word game solver using graph-theoretic algorithms and statistical distribution analysis.",
      stack: ["Python", "Graph Theory", "Selenium"],
      link: "https://github.com/prakharr5",
    },
  ];

  const webProjects = [
    {
      title: "B.P. Alloys Corporate Portal",
      category: "Enterprise Web",
      description:
        "Designed the official digital interface to centralize factory data, deployed 2 weeks ahead of schedule.",
      stack: ["ReactJS", "Digital Transformation"],
      link: "https://github.com/prakharr5",
    },
    {
      title: "SubSaFT Official Site",
      category: "Freelance Client",
      description:
        "Fully SEO-optimized official website for a startup client, handling end-to-end development and deployment.",
      stack: ["Web Dev", "SEO", "Analytics"],
      link: "https://github.com/prakharr5",
    },
    {
      title: "BMU ACM Chapter Website",
      category: "Academic Org",
      description:
        "Official chapter website serving hundreds of students. Managed 99.9% uptime and event registration funnels.",
      stack: ["React", "Event Management"],
      link: "https://github.com/prakharr5",
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group border border-gray-100 hover:border-brand-black/20 p-8 transition-colors bg-white hover:bg-brand-light/30"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold tracking-wider text-brand-gray uppercase">
          {project.category}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-black opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>

      <h3 className="text-2xl font-serif font-medium mb-3 text-brand-black group-hover:underline decoration-1 underline-offset-4">
        {project.title}
      </h3>

      <p className="text-brand-gray text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium text-brand-black bg-gray-100 px-2 py-1 rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="work" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl mb-4 text-brand-black"
          >
            Selected Works
          </motion.h2>
          <p className="text-brand-gray max-w-xl">
            A curation of my research in AI, engineering systems, and commercial
            web solutions.
          </p>
        </div>

        {/* Category 1: Research */}
        <div className="mb-20">
          <h3 className="text-sm font-bold tracking-widest text-brand-black uppercase mb-8 border-l-4 border-brand-black pl-4">
            Innovation & Research
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Category 2: Web */}
        <div>
          <h3 className="text-sm font-bold tracking-widest text-brand-black uppercase mb-8 border-l-4 border-brand-black pl-4">
            Commercial & Web Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + 3} />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/prakharr5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-black font-medium hover:text-brand-gray transition-colors border-b border-brand-black pb-1"
          >
            <Github size={18} />
            View Complete Archive on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
