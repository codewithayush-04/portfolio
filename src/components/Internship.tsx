"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, FileText, Award, Briefcase, Calendar, Building2 } from "lucide-react";
import styles from "./Internship.module.css";

const tasks = [
  {
    title: "CRUD Todo Application",
    description:
      "Built a fully functional task management app with Create, Read, Update & Delete operations, featuring a clean UI and persistent state management.",
    tags: ["React.js", "CRUD", "State Management"],
    link: "https://github.com/codewithayush-04/task-2-", // Replace with live project link
  },
  {
    title: "Modern Profile Page",
    description:
      "Designed and developed a modern, responsive profile page with sleek aesthetics, smooth animations, and component-driven architecture.",
    tags: ["React.js", "CSS", "Responsive Design"],
    link: "https://github.com/codewithayush-04/task1", // Replace with live project link
  },
];

const documents = [
  {
    label: "Offer Letter",
    icon: FileText,
    href: "/kodbud-offer-letter.pdf", // Replace with actual file path
    color: "#6366f1",
  },
  {
    label: "Certificate",
    icon: Award,
    href: "/kodbud-certificate.pdf", // Replace with actual file path
    color: "#10b981",
  },
];

function TaskCard({
  task,
  index,
}: {
  task: (typeof tasks)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <motion.div
      ref={cardRef}
      className={styles.taskCard}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ y, scale }}
    >
      <div className={styles.taskNumber}>
        <span>Task {String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className={styles.taskTitle}>{task.title}</h3>
      <p className={styles.taskDesc}>{task.description}</p>
      <div className={styles.taskFooter}>
        <div className={styles.tags}>
          {task.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={task.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.taskLink}
        >
          View Project <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Internship() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <section className={styles.section} id="experience">
      {/* Section Header */}
      <motion.div
        className={styles.sectionHeader}
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 className={styles.sectionTitle} style={{ x: headingX }}>
          Experience
        </motion.h2>
      </motion.div>

      {/* Internship Card */}
      <motion.div
        className={styles.internshipCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Company Header */}
        <div className={styles.companyHeader}>
          <div className={styles.companyInfo}>
            <div className={styles.companyIconWrapper}>
              <Building2 size={24} />
            </div>
            <div>
              <h3 className={styles.companyName}>Kodbud Solutions</h3>
              <p className={styles.role}>
                <Briefcase size={14} />
                React.js Intern
              </p>
            </div>
          </div>
          <div className={styles.duration}>
            <Calendar size={14} />
            <span>4 Weeks</span>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Description */}
        <p className={styles.internshipDesc}>
          Completed a hands-on internship focused on building real-world React.js
          applications. Worked on two key projects that strengthened my skills in
          component architecture, state management, and modern UI development.
        </p>

        {/* Task Cards */}
        <div className={styles.tasksGrid}>
          {tasks.map((task, i) => (
            <TaskCard key={task.title} task={task} index={i} />
          ))}
        </div>

        {/* Documents */}
        <motion.div
          className={styles.documents}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className={styles.documentsLabel}>Documents</span>
          <div className={styles.documentLinks}>
            {documents.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
                style={{ "--doc-accent": doc.color } as React.CSSProperties}
              >
                <span className={styles.documentIcon}>
                  <doc.icon size={18} />
                </span>
                <span className={styles.documentText}>
                  <span className={styles.documentTitle}>{doc.label}</span>
                  <span className={styles.documentHint}>Click to view</span>
                </span>
                <ArrowUpRight size={14} className={styles.documentArrow} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
