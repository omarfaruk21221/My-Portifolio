"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import mayphoto1 from "../../public/assets/mayphoto1.png";
import myphoto2 from "../../public/assets/myphoto2.png";
import fileIcon from "../../public/assets/file.svg";

const banners = [mayphoto1, myphoto2];

export default function Bannar() {
  return (
    <div className="relative min-h-screen w-full px-4 sm:px-8 md:px-12 lg:px-24 py-8 flex flex-col pt-20">
      <main className="flex-grow grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col justify-center items-start space-y-8">
          <h2 className="text-center md:text-left">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent leading-tight "> Hi ! I'm </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content leading-tight"> OMAR FARUK</span>
            <br />
            <span className="text-secondary text-2xl">Full-Stack Web Developer</span>
            <br />
          </h2>
          <p className="text-gray-400 max-w-md">
            I'm a passionate Full-Stack Web Developer with a strong foundation in both frontend and backend technologies. My journey in web development began with a deep love for creating dynamic and interactive user interfaces. I've since honed my skills in building responsive, performant, and scalable web applications.
          </p>
          <Link href="https://drive.google.com/file/d/1-QcwwTf5xkK8m_smUfzJC0d_bD8af5l-/view?usp=sharing" target="_blank" className="btn btn-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 group transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30">
            Resume Download <Image className="text-white" src={fileIcon} alt="file-icon" />
          </Link>
        </div>
        <div className="relative w-full max-w-md mx-auto md:max-w-none">
          <div className="absolute -top-10 -right-10 w-full min-h-[75vh] bg-primary/80 rounded-2xl -z-10 blur-sm"></div>
          <div className="absolute -top-8 -right-8 w-full min-h-[75vh] bg-secondary/80 rounded-2xl -z-10"></div>
          <div className="relative overflow-hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide">
              {banners.map((banner, index) => (
                <div key={index} className="carousel-item flex-shrink-0 w-full">
                  <Image
                    alt={`Banner image ${index + 1}`}
                    className="w-full h-[75vh] object-fit rounded-2xl aspect-[4/5] shadow-2xl"
                    src={banner}
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}