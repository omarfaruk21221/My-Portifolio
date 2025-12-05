"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
    const [activeTab, setActiveTab] = useState(0);
    const [educationData, setEducationData] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Fetch education data
        fetch('/data/educationData.json')
            .then(res => res.json())
            .then(data => {
                setEducationData(data);
                if (data.length > 0) setActiveTab(data[0].id);
            })
            .catch(err => console.error("Failed to load education data", err));

        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && sectionRef.current?.classList.add('animate-in'),
            { threshold: 0.1 }
        );
        const current = sectionRef.current;
        current && observer.observe(current);
        return () => current && observer.unobserve(current);
    }, []);

    if (educationData.length === 0) return null; // Or a loading spinner

    const activeItem = educationData.find(item => item.id === activeTab) || educationData[0];

    return (
        <section
            ref={sectionRef}
            id="education"
            className="min-h-screen bg-slate-100 dark:bg-slate-950 py-24 relative overflow-hidden font-display"
        >
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse" />
                        <span className="text-lg font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wide">Education Journey</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-purple-700 to-indigo-700 dark:from-white dark:via-purple-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6">
                        Academic Excellence
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg" />
                    <p className="text-xl text-slate-600 dark:text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed">
                        My educational background and academic achievements.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        {educationData.map((edu) => (
                            <motion.button
                                key={edu.id}
                                onClick={() => setActiveTab(edu.id)}
                                className={`group relative p-6 px-8 rounded-3xl font-semibold text-lg transition-all duration-500 flex items-center gap-4 min-w-[280px] ${activeTab === edu.id
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                                        : 'bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700/50 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 hover:border-purple-500/50'
                                    }`}
                                whileHover={{ y: -8 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="text-2xl"><FaGraduationCap /></span>
                                <span className="font-bold">{edu.degree.split(' in ')[0]}</span>
                                {activeTab === edu.id && (
                                    <motion.div
                                        className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl -z-10"
                                        layoutId="activeTabBg"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Content */}
                    <AnimatePresence mode="wait">
                        {activeItem && (
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, x: -30 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800/50 rounded-4xl p-12 lg:p-20 shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/50 max-w-5xl mx-auto"
                            >
                                <div className="lg:flex lg:items-center lg:gap-12 mb-12">
                                    <div className="lg:flex-shrink-0 mb-8 lg:mb-0">
                                        <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-6">
                                            {activeItem.degree}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400">
                                            <div className="flex items-center gap-3 px-5 py-3 bg-slate-100 dark:bg-slate-800/60 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-700/50">
                                                <span className="text-xl">🏫</span>
                                                <span className="font-semibold">{activeItem.institution}</span>
                                            </div>
                                            <span className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 rounded-xl font-medium border border-emerald-500/20 dark:border-emerald-500/30">
                                                {activeItem.seasion}
                                            </span>
                                        </div>
                                    </div>

                                    <motion.div
                                        className="w-32 h-32 lg:w-40 lg:h-40 p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 rounded-3xl backdrop-blur border border-purple-500/20 dark:border-purple-500/30 flex items-center justify-center shadow-2xl mx-auto lg:mx-0"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <FaGraduationCap className="text-6xl text-purple-600 dark:text-purple-300" />
                                    </motion.div>
                                </div>

                                {/* Content Split */}
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                                        Details
                                    </h4>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {activeItem.description}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-in * { animation-fill-mode: both; }
      `}</style>
        </section>
    );
}
