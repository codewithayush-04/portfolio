"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms driven by scroll like antigravity
  
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const profileScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const greetingY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className={styles.hero} id="home" ref={sectionRef}>
      <div className={styles.heroContent}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ y: greetingY }}
        >
          Hey there, I&apos;m
        </motion.p>

        <motion.h1
          className={styles.heroName}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ scale: nameScale, y: nameY, opacity: nameOpacity }}
        >
          Ayush{" "}
          <span className={styles.heroNameHighlight}>Gupta</span>
        </motion.h1>

        <motion.div
          className={styles.subtitlesRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ y: subtitleY, opacity: subtitleOpacity }}
        >
          <span className={styles.subtitle}>Web Designer</span>
          <span className={styles.divider} />
          <span className={styles.subtitle}>Web Developer</span>
        </motion.div>

        <motion.div
          className={styles.profileWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          style={{ y: profileY, scale: profileScale }}
        >
          <img 
            src="/WhatsApp Image 2026-06-26 at 10.31.38.jpeg"
            alt="Ayush Gupta"
            className={styles.profileImage}
            width={380}
            height={507}
          /> 
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className={`${styles.decorDot} ${styles.decorDot1}`} />
      <div className={`${styles.decorDot} ${styles.decorDot2}`} />
      <div className={`${styles.decorDot} ${styles.decorDot3}`} />
      <div className={`${styles.decorLine} ${styles.decorLine1}`} />
      <div className={`${styles.decorLine} ${styles.decorLine2}`} />

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
