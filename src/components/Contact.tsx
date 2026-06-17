"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.contactTop}>
        <motion.div
          className={styles.ctaArea}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={styles.ctaHeading}>
            Have an Idea
            <br />
            Worth Building?
          </h2>
          <a
            href="mailto:ayushkumargupta0441@gmail.com"
            className={styles.ctaBtn}
            id="start-conversation-btn"
          >
            Start a Conversation <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.div
          className={styles.emailArea}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <a
            href="mailto:ayushkumargupta0441@gmail.com"
            className={styles.emailLink}
            id="email-link"
          >
            ayushkumargupta
            <br />
            0441@gmail.com <ArrowUpRight size={28} />
          </a>

          <div className={styles.socialRow}>
            <a
              href="https://github.com/codewithayush-04"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
              id="social-github"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-gupta-363a45325"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
              id="social-linkedin"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="https://www.instagram.com/ayusshhh_04?igsh=djE0NDRla2VyMTU1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
              id="social-instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkGroup}>
              <a href="#home" className={styles.footerLink}>
                Home
              </a>
              <a href="#about" className={styles.footerLink}>
                About
              </a>
              <a href="#projects" className={styles.footerLink}>
                Projects
              </a>
            </div>
            <div className={styles.footerLinkGroup}>
              <a href="#contact" className={styles.footerLink}>
                Contact
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerText}>
            Web designer &amp; web developer
          </span>
          <span className={styles.footerText}>
            &copy; {new Date().getFullYear()} Ayush Gupta
          </span>
          <span className={styles.footerMade}>
            Designed with curiosity and good coffee ✨
          </span>
        </div>

        <div className={styles.hugeTextContainer}>
          <h1 className={styles.hugeText}>Ayush Gupta</h1>
        </div>
      </footer>
    </section>
  );
}
