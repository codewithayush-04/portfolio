"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Philosophy.module.css";

const tickerWords = [
  "Clean Code",
  "Pixel Perfect",
  "User First",
  "Scalable Systems",
  "Modern Stack",
  "Fast Delivery",
  "Responsive Design",
  "Creative Solutions",
  "Performance",
  "Accessibility",
];

// Duplicate for infinite loop
const tickerItems = [...tickerWords, ...tickerWords];

const metrics = [
  { number: "100%", label: "Commitment" },
  { number: "24/7", label: "Availability" },
  { number: "∞", label: "Curiosity" },
  { number: "0", label: "Ego" },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const circleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Top Divider */}
      <div className={styles.topDivider} />

      {/* Section Label */}
      <motion.div
        className={styles.label}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <span className={styles.labelDot} />
        Philosophy & Approach
      </motion.div>

      {/* Main Statement + Info Cards */}
      <div className={styles.statementArea}>
        <div className={styles.statementLeft}>
          <motion.h2
            className={styles.statement}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            I build things that live at the intersection of{" "}
            <span className={styles.statementHighlight}>design</span> &{" "}
            <span className={styles.statementHighlight}>engineering</span>.
          </motion.h2>

          <motion.p
            className={styles.statementSub}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Every line of code I write is driven by empathy for the user and
            obsession with craft. I believe great software should feel
            invisible — seamless, intuitive, and delightful.
          </motion.p>
        </div>

        <div className={styles.statementRight}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className={styles.infoCardIcon}>⚡</span>
            <span className={styles.infoCardTitle}>Currently</span>
            <span className={styles.infoCardValue}>
              Building full-stack web apps & exploring AI
            </span>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className={styles.infoCardIcon}>🎯</span>
            <span className={styles.infoCardTitle}>Focus</span>
            <span className={styles.infoCardValue}>
              Creating products people actually love to use
            </span>
          </motion.div>
        </div>
      </div>

      {/* Infinite Ticker */}
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {tickerItems.map((word, i) => (
            <div key={`ticker-${i}`} className={styles.tickerItem}>
              <span className={styles.tickerText}>{word}</span>
              <span className={styles.tickerSeparator} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className={styles.metricsRow}>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className={styles.metric}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className={styles.metricNumber}>{metric.number}</div>
            <div className={styles.metricLabel}>{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className={`${styles.decorCircle} ${styles.decorCircle1}`}
        style={{ rotate: circleRotate, scale: circleScale }}
      />
      <motion.div
        className={`${styles.decorCircle} ${styles.decorCircle2}`}
        style={{ rotate: circleRotate }}
      />
      <div className={`${styles.decorCross} ${styles.decorCross1}`} />
      <div className={`${styles.decorCross} ${styles.decorCross2}`} />
    </section>
  );
}
