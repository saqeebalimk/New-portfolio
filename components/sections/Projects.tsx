"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const featuredProjects = [
    {
        id: "jynm",
        title: "JYNM (Junkyards Near Me)",
        description: "Automotive salvage marketplace platform with AI-powered part matching and lead generation.",
        tech: ["React", "Django", "PostgreSQL", "AI"],
        live: "https://jynmautos.com",
        image: "/images/projects/jynm-desktop.png"
    },
    {
        id: "sevenchats",
        title: "SevenChats",
        description: "Real-time chat application with LLM integration and intelligent messaging features.",
        tech: ["React", "Redux", "Node.js", "WebSockets"],
        live: "https://sevenchats.com",
        image: "/images/projects/7chats-dashboard.png"
    },
    {
        id: "hms",
        title: "Hospital Management System",
        description: "Comprehensive hospital management dashboard for streamlined healthcare operations.",
        tech: ["React", "Node.js", "MySQL", "Dashboard"],
        live: "#",
        image: "/images/projects/bsm-platform-main.png"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative px-4 sm:px-6 lg:px-8 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-full mb-3 border border-blue-100">
                            PROJECTS
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Featured Projects</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-slate-500 font-medium pb-1 hidden sm:block">Real-world projects solving meaningful problems.</p>
                        <Button variant="outline" className="text-primary font-bold border-blue-100 bg-blue-50 hover:bg-blue-100 h-9 hidden md:flex">View All Projects →</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <Card key={project.id} className="group overflow-hidden relative border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full !p-0 rounded-[1.5rem]">
                            {/* Project Image */}
                            <div className="relative h-52 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                            </div>

                            <div className="relative z-10 p-6 flex flex-col flex-grow bg-white">
                                <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-500 text-[14px] mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-5 mt-auto">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-blue-50/50 rounded-md text-[11px] font-bold text-blue-600 border border-blue-100/50">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link aligned far right */}
                                    <div className="pt-4 border-t border-slate-100 flex justify-end">
                                        {project.live !== "#" ? (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-primary transition-colors">
                                                Live Demo <ExternalLink size={14} className="mb-0.5" />
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 cursor-not-allowed">
                                                Live Demo <ExternalLink size={14} className="mb-0.5" />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowExternal({ size = 16, className = "" }: { size?: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    )
}
