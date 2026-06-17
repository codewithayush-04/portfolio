"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Impact.module.css";

const stats = [
  {
    number: "4+",
    label: "Years of Experience",
    description:
      "Designing and developing products that ship to thousands of users worldwide.",
  },
  {
    number: "20+",
    label: "Projects Delivered",
    description:
      "From concept to launch — building end-to-end experiences across industries.",
  },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.sectionTitle}>My Impact in Numbers</h2>
      </motion.div>

      <div className={styles.cards}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.card}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              className={styles.cardNumber}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15 + 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              viewport={{ once: true }}
            >
              {stat.number}
            </motion.span>
            <span className={styles.cardLabel}>{stat.label}</span>
            <p className={styles.cardDescription}>{stat.description}</p>
          </motion.div>
        ))}

        <motion.div
          className={`${styles.card} ${styles.visualCard}`}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.visualOverlay} style={{ y: bgY }} />
          <div className={styles.visualText}>
            <div className={styles.visualQuote}>&ldquo;</div>
            Design is not just what it looks like — it&apos;s how it works.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
