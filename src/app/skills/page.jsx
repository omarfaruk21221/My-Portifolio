"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
    const [skillsData, setSkillsData] = React.useState([]);
    const [marqueeIcons, setMarqueeIcons] = React.useState([]);

    React.useEffect(() => {
        // Fetch existing skills data
        fetch("/data/skillsData.json")
            .then((res) => res.json())
            .then((data) => setSkillsData(data))
            .catch((err) => console.error("Failed to load skills data:", err));

        // Fetch new marquee icons
        fetch("/data/skillIcons.json")
            .then((res) => res.json())
            .then((data) => setMarqueeIcons(data))
            .catch((err) => console.error("Failed to load marquee icons:", err));
    }, []);

    // Duplicate icons for seamless loop
    const duplicatedIcons = [...marqueeIcons, ...marqueeIcons];

    return (
        <div className="min-h-screen bg-base-100 text-base-content py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container mx-auto"
            >
                <header className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="text-base-content/70 mt-6 max-w-2xl mx-auto text-lg mb-8">
                        Here are some of the technologies and tools I work with to bring ideas to life.
                    </p>

                    {/* Infinite Marquee Section */}
                    {marqueeIcons.length > 0 && (
                        <div className="relative w-full max-w-5xl mx-auto h-24 overflow-hidden bg-base-200/30 rounded-xl backdrop-blur-sm border border-white/5 flex items-center mb-16 shadow-inner">
                            {/* Gradient Masks */}
                            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-base-100 to-transparent z-10" />
                            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-base-100 to-transparent z-10" />

                            {/* Scrolling Track */}
                            <motion.div
                                className="flex gap-12 items-center px-6"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    duration: 30,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                style={{ width: "max-content" }}
                            >
                                {duplicatedIcons.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center gap-2 group min-w-[60px]">
                                        <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2 filter grayscale group-hover:grayscale-0">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={48}
                                                height={48}
                                                className="object-contain" // Use standard img if NEXT_IMAGE errors persist in dev, but trying Next Image first
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-base-200/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${category.bgColor} ${category.iconColor} text-2xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.category}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-sm font-semibold text-base-content/60">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-base-300 rounded-full h-2.5 overflow-hidden">
                                            <motion.div
                                                className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}