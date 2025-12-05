"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 py-20 bg-base-100 font-display ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full mx-auto"
            >
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Me</span>
                    </h1>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {[
                        {
                            icon: "👋",
                            title: "Who I Am",
                            text: "I am a dedicated MERN Stack Developer with a passion for building scalable and user-centric web applications. My coding style is driven by clarity, efficiency, and a touch of creativity. I believe technology is not just about writing code; it's about solving real-world problems and making lives easier."
                        },
                        {
                            icon: "🚀",
                            title: "My Programming Journey",
                            text: "My journey into the world of tech began with a simple curiosity about how the web works. That curiosity quickly turned into a passion as I mastered HTML, CSS, and JavaScript. I then dove deep into the MERN stack (MongoDB, Express, React, Node.js), constantly learning and adapting to the ever-evolving tech landscape. Every bug fixed is a lesson learned!"
                        },
                        {
                            icon: "💻",
                            title: "What I Love to Do",
                            text: "I thrive on creating dynamic, responsive, and interactive user interfaces. I love the logic behind backend development and the satisfaction of connecting it all together. Whether it's optimizing a database query or crafting a pixel-perfect component, I enjoy every step of the development lifecycle."
                        },
                        {
                            icon: "🌍",
                            title: "Life Beyond Code",
                            text: "When I'm not glued to my screen, I'm an explorer at heart. I love traveling to new places and experiencing different cultures. I'm also an avid reader 📚, always looking for a good book to get lost in. On active days, you'll find me playing sports 🏀 to stay energetic and focused. These hobbies keep my mind fresh and creativity flowing."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-5 bg-slate-100 dark:bg-slate-700 p-3 rounded-xl">{item.icon}</span>
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{item.title}</h2>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </main>
            </motion.div>
        </div>
    );
}