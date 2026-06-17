"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Jacob & Co Clone",
    description:
      "A high-fidelity clone of the Jacob & Co luxury watch website, featuring stunning visuals, smooth animations, and a responsive design.",
    image: "/project1.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://jacob-co-clone.vercel.app/",
  },
  {
    title: "0001 Cars",
    description:
      "A premium car detailing service website with a sleek, dark-themed UI, services layout, and high-quality image galleries.",
    image: "/project2.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://0001-in.vercel.app/",
  },
  {
    title: "Aman Global Enterprises",
    description:
      "A professional IT solutions company website offering networking, surveillance, and IT support services.",
    image: "/project3.png",
    tags: ["React", "CSS", "UI/UX"],
    link: "https://www.amanglobal.in/",
  },
  {
    title: "Lumina Notes AI",
    description:
      "An AI-powered study application that turns notes into active knowledge, generating summaries, quizzes, and flashcards instantly.",
    image: "/project4.png",
    tags: ["React", "AI", "Node.js"],
    link: "https://study-ai--ayushkumargupt9.replit.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className={styles.projectCard}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ y, scale }}
    >
      <div className={styles.projectImageWrapper}>
        <motion.img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
          loading="lazy"
          style={{ scale: imgScale }}
        />
        <div className={styles.projectOverlay}>
          <span className={styles.projectOverlayText}>
            View Project <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <section className={styles.section} id="projects">
      <motion.div
        className={styles.sectionHeader}
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 className={styles.sectionTitle} style={{ x: headingX }}>
          Selected Works
        </motion.h2>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
