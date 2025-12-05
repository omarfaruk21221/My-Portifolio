"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef(null);

  // Theme Toggle Logic
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  // Scroll Detection for Glass/Floating effect
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
        rotation: 5,
        duration: 0.3,
        paused: true,
        ease: "power1.out",
      });
      logo.addEventListener("mouseenter", () => hover.play());
      logo.addEventListener("mouseleave", () => hover.reverse());
    }
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Color", path: "/color" },
    { name: "Project", path: "/project" },
    { name: "Resume", path: "/resume" },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center w-full sticky top-4 z-50 px-4">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`navbar max-w-7xl w-full rounded-2xl transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-base-100/70 backdrop-blur-xl shadow-2xl border border-white/10"
              : "bg-base-100/30 backdrop-blur-md shadow-lg border border-transparent"
          }
        `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-white/5"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <a
            ref={logoRef}
            className="btn btn-ghost text-xl font-bold tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:bg-white/5 transition-colors"
          >
            Omar Faruk
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants}>
                <Link
                  href={link.path}
                  className="hover:text-primary transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle hover:bg-white/10 transition-colors"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
}
