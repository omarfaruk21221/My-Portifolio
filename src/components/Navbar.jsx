"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaPaperPlane } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoRef = useRef(null);

  // Scroll Detection for Glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Logo Hover Animation
  useEffect(() => {
    const logo = logoRef.current;
    if (logo) {
      const hover = gsap.to(logo, {
        scale: 1.1,
        rotation: 3,
        duration: 0.3,
        paused: true,
        ease: "power1.out",
      });
      logo.addEventListener("mouseenter", () => hover.play());
      logo.addEventListener("mouseleave", () => hover.reverse());
    }
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/aboutMe", icon: <FaUser /> },
    { name: "Skills", path: "/skills", icon: <FaCode /> },
    { name: "Project", path: "/projects", icon: <FaBriefcase /> },
    { name: "Education", path: "/education", icon: <FaGraduationCap /> },
  ];

  // Framer Motion Variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed  top-0 left-0 w-full z-50 transition-all duration-300 font-display ${isScrolled
            ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-lg shadow-purple-500/5"
            : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" ref={logoRef} className="text-2xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
            <span className="text-3xl">✨</span> Omar Faruk
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors group flex items-center gap-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full opacity-50" />
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaPaperPlane className="text-sm" />
              Hire Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl text-slate-700 dark:text-slate-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium border border-transparent hover:border-purple-100 dark:hover:border-purple-800/50"
                  >
                    <span className="text-xl opacity-70">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
