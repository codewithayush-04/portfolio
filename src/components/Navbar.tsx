"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
        id="navbar"
      >
        <div className={styles.navInner}>
          <a href="#home" className={styles.logo}>
            ag
          </a>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/ayushresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            id="resume-btn"
          >
            Resume <ArrowRight size={16} />
          </a>

          <button
            className={`${styles.mobileToggle} ${
              mobileOpen ? styles.mobileToggleOpen : ""
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/ayushresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
          style={{ display: "flex" }}
          onClick={handleLinkClick}
        >
          Resume <ArrowRight size={16} />
        </a>
      </div>
    </>
  );
}
