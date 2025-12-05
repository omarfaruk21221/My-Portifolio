"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "../../../components/ProjectCard";
import Pagination from "../../../components/Pagination";

const BACKEND_TECHS = ["Node.js", "Express", "MongoDB", "Firebase", "Sanity", "Appwrite", "Mongoose", "Socket.io"];

export default function FrontendProjects() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                // Filter for Frontend Only (Exclude projects with backend tech)
                const frontendStats = data.filter(p => {
                    const stack = p.tech_stack || p.tech || [];
                    return !stack.some(t => BACKEND_TECHS.includes(t));
                });
                setProjects(frontendStats);
            })
            .catch((err) => console.error("Error loading projects:", err));
    }, []);

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const currentProjects = projects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            {currentProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            {currentProjects.length > 0 && (
                <div className="col-span-full">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            )}
            {projects.length === 0 && (
                <div className="col-span-full text-center py-12 text-slate-500">
                    No pure frontend projects found.
                </div>
            )}
        </>
    );
}