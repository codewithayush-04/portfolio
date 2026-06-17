"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  Atom,
  Database,
  Code,
  Binary,
  Palette,
  Braces,
  DatabaseZap,
  Server,
  Blocks,
} from "lucide-react";
import styles from "./Clients.module.css";

const skills = [
  { name: "Next.js", icon: Globe },
  { name: "React.js", icon: Atom },
  { name: "Supabase", icon: Database },
  { name: "GitHub", icon: Code },
  { name: "C++ & DSA", icon: Binary },
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "MongoDB", icon: DatabaseZap },
  { name: "Express.js", icon: Server },
  { name: "Node.js", icon: Blocks },
];

// Duplicate array for infinite marquee effect
const marqueeSkills = [...skills, ...skills];

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.heading}>
          3+ Years of<br />
          Coding Experience
        </h2>
        <p className={styles.description}>
          Over the past 3 years, I&apos;ve honed my skills in software engineering and web development. From solving complex algorithms using C++ and DSA to building full-stack applications with Next.js, React, and Supabase, my focus is always on writing clean, scalable, and efficient code.
        </p>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.grid}>
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className={styles.gridItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className={styles.clientRow}>
                  <div className={styles.clientIcon}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className={styles.clientLogo}>{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Infinite scrolling marquee — like the reference site's acar-section */}
      <div className={styles.marqueeSection}>
        <motion.div className={styles.marqueeTrack} style={{ x: leftX }}>
          <div className={styles.marqueeInner}>
            {marqueeSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={`m1-${i}`} className={styles.marqueeItem}>
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div className={styles.marqueeTrack} style={{ x: rightX }}>
          <div className={`${styles.marqueeInner} ${styles.marqueeReverse}`}>
            {marqueeSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={`m2-${i}`} className={styles.marqueeItem}>
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
