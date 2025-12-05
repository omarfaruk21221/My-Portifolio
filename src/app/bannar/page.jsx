"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaArrowUp, FaDownload, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BannarPage() {
    return (
        <section className="bg-gradient-to-br from-base-100 to-base-200 text-base-content font-display antialiased min-h-screen relative overflow-hidden px-20 md:px-40 py-30 flex items-center">
            {/* Background Shapes & Profile Image */}

            {/* Large Circle with Image */}
            <div className="absolute top-89 right-70 transform -translate-y-1/2 translate-x-1/4 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] rounded-full border  border-secondary/20 flex items-center justify-center z-10">
                <div className="relative z-10 w-full h-full object-contain rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
                    <Image
                        src="/assets/profile-rbg.png"
                        alt="Omar Faruk Profile"
                        fill
                        className="object-contain object-center transform hover:scale-105 transition-transform duration-500"
                        priority
                    />
                </div>
            </div>

            {/* Decorative Smaller Circle */}
            <div className="absolute top-99 -right-20 transform -translate-y-1/2 translate-x-1/4 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[55rem] lg:h-[35rem] rounded-full border-2 border-primary bg-gradient-to-br from-secondary/70 via-primary/30 to-transparent  flex items-center justify-center -z-0"></div>
             {/* Decorative Smaller Circle */}
            <div className="absolute top-1/2 right-0 transform -translate-y-full translate-x-2/3 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 -z-0"></div>
            {/* Decorative Smaller Circle */}
            <div className="absolute top-1/9 right-20 transform -translate-y-full translate-x-2/3 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 -z-0"></div>

            {/* Main Content */}
            <main className="container mx-auto relative z-10 w-full">
                <div className="max-w-2xl">
                    <p className="text-xl text-base-content/70 mb-2 font-medium">Hello, I&apos;m</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-base-content leading-tight tracking-tight">
                        Omar Faruk
                    </h1>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary my-8 rounded-full"></div>
                    <h2 className="text-xl md:text-4xl font-semibold text-primary mb-6">Full Stack Developer</h2>
                    <p className="mt-4 text-md md:text-lg text-base-content/40 leading-relaxed max-w-lg">
                        I&apos;m a passionate Full-Stack Web Developer with a strong foundation in both frontend and backend technologies. My journey in web development began with a deep love for creating dynamic and interactive user interfaces. I&apos;ve since honed my skills in building responsive, performant, and scalable web applications.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Link
                            href="https://drive.google.com/file/d/1-QcwwTf5xkK8m_smUfzJC0d_bD8af5l-/view?usp=sharing"
                            target="_blank"
                            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 transform"
                        >
                            <FaDownload className="mr-2 text-lg" />
                            Download Resume
                        </Link>

                    </div>

                    {/* Social Icons */}
                    <div className="mt-12 flex items-center space-x-5">
                        {[
                            { icon: FaGithub, href: "https://github.com/omarfaruk21221", title: "GitHub" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/omarfaruk21221", title: "LinkedIn" },
                            { icon: FaFacebookF, href: "https://www.facebook.com/omarfaruk21221", title: "Facebook" },
                            { icon: FaWhatsapp, href: "https://wa.me/8801768838715", title: "WhatsApp" }
                        ].map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                                title={social.title}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-base-100 border border-base-content/10 text-base-content/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/30 text-xl"
                            >
                                <social.icon />
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-base-content/50 rounded-full"></div>
                </motion.div>
            </div>

            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 text-xl"
            >
                <FaArrowUp />
            </button>

            {/* Sidebar Line Decoration */}
            <aside className="fixed top-0 right-0 h-full w-2 bg-black/5 hidden lg:block z-20">
                <div className="h-24 w-full bg-primary rounded-full mt-24"></div>
            </aside>
        </section>
    );
}