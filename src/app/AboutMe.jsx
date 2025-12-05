"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-base-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full mx-auto"
            >
                <header className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Me</span>
                    </h1>
                    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            icon: "👋",
                            title: "Introduction",
                            text: "I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications. My journey in programming started during my college years when I built my first website, and I haven't looked back since."
                        },
                        {
                            icon: "🚀",
                            title: "My Programming Journey",
                            text: "My programming journey began with curiosity and has evolved into a professional career. I started with HTML and CSS, then moved to JavaScript, and eventually mastered modern frameworks like React.js,Next.js, Node.js, and more. Every day brings new challenges and opportunities to learn."
                        },
                        {
                            icon: "💻",
                            title: "What I Love",
                            text: "I enjoy working on projects that challenge me to think creatively and solve complex problems. I'm particularly drawn to full-stack development where I can bring ideas to life from concept to deployment. I love collaborating with teams and believe in writing clean, maintainable code."
                        },
                        {
                            icon: "🎨",
                            title: "Beyond Coding",
                            text: "When I'm not coding, you can find me playing basketball, reading tech blogs, or exploring nature through photography. I also enjoy contributing to open-source projects and mentoring aspiring developers."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mr-4">{item.icon}</span>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </main>
            </motion.div>
        </div>
    );
}