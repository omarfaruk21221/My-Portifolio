"use client";
import React from "react";
import Bannar from "./Bannar";
import AboutMe from "./aboutMe/page";
import Skills from "./Skills/page";
import Education from "./education/page";
import Contact from "./contact/page";
import HomeProjects from "@/components/HomeProjects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Bannar />
      <AboutMe />
      <Skills />
      <Education />
      <HomeProjects />
      <Contact />
    </div >
  );
}
