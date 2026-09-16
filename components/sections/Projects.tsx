"use client";

import { Card } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import projectsData from "@/data/projects.json";

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
                    <p className="text-slate-500 font-medium pb-1 hidden sm:block">Real-world projects solving meaningful problems.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <Card key={project.id} className="group overflow-hidden relative border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full !p-0 rounded-[1.5rem]">
                            {/* Project Image */}
                            <div className="relative h-52 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                                {/* JYNM Featured Badge */}
                                {project.id === 'jynm' && (
                                    <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                        Featured
                                    </div>
                                )}
                            </div>

                            <div className="relative z-10 p-6 flex flex-col flex-grow bg-white">
                                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-500 text-[13.5px] mb-5 flex-grow leading-relaxed line-clamp-2">
                                    {project.shortDescription || project.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.slice(0, 4).map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-blue-50/50 rounded-md text-[10px] font-bold text-blue-600 border border-blue-100/50">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="px-2.5 py-1 bg-slate-50 rounded-md text-[10px] font-bold text-slate-500 border border-slate-200">
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Link */}
                                    <div className="pt-3 border-t border-slate-100 flex justify-end">
                                        {project.live ? (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-primary transition-colors">
                                                Live Demo <ExternalLink size={13} />
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 cursor-not-allowed">
                                                Live Demo <ExternalLink size={13} />
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
