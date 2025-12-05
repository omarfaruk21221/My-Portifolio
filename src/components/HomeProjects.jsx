"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function HomeProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Failed to load projects:", err));
    }, []);

    // Show only first 3 projects
    const displayedProjects = projects.slice(0, 3);

    return (
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-base-100 relative overflow-hidden" id="projects">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                        <p className="text-base-content/70 mt-6 max-w-2xl mx-auto text-lg">
                            Check out some of my recent work.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/projects">
                        <button className="px-8 py-4 bg-base-200 hover:bg-base-300 text-base-content font-bold rounded-full transition-all duration-300 flex items-center gap-2 mx-auto group border border-base-content/10 hover:border-primary/30 hover:text-primary">
                            View All Projects
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
