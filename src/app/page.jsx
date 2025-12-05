"use client";
import React from "react";
import AboutMe from "./aboutMe/page";
import Skills from "./Skills/page";
import Education from "./education/page";
import Contact from "./contact/page";
import HomeProjects from "@/components/HomeProjects";
import BannarPage from "./bannar/page.jsx";
export default function Home() {
  return (
    <div>
      <BannarPage />
      <AboutMe />
      <Skills />
      <Education />
      <HomeProjects />
      <Contact />
    </div >
  );
}
