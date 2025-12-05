"use client";
import React from "react";
import Link from "next/link";
import { FaFilter, FaArrowUp } from "react-icons/fa";

export default function Projects({ children }) {
    return (
        <section className="font-display bg-base-100 dark:bg-base-300 min-h-screen">
            <div className="w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-7xl mx-auto mt-15">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-3">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                        </h1>
                        <div className="relative inline-block">
                            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                        </div>
                        <p className="mt-6 text-base-content/70 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and experience
                        </p>
                    </header>
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-12">
                        <div className="p-2.5 text-base-content/70">
                            <FaFilter className="text-xl" />
                        </div>
                        <Link href="/projects/All" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:opacity-90 transition-all">
                            All
                        </Link>
                        <Link href="/projects/FullStack" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-base-200 text-base-content hover:bg-base-300 transition-colors duration-300">
                            Full Stack
                        </Link>
                        <Link href="/projects/Frontend" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-base-200 text-base-content hover:bg-base-300 transition-colors duration-300">
                            Frontend
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {children}
                    </div>
                </div>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-all duration-300 z-50 hover:scale-110"
                >
                    <FaArrowUp />
                </button>
            </div>
        </section>
    );
}