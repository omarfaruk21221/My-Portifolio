"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "../../../components/ProjectCard";
import Pagination from "../../../components/Pagination";

export default function AllProjects() {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
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
            <div className="col-span-full">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}