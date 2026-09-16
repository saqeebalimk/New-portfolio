"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ExternalLink, Github, Eye, Globe } from "lucide-react";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Projects() {
    return (
        <section id="projects" className="py-24 relative px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        A selection of production applications and engineering case studies I&apos;ve built.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <Card key={project.id} className="group overflow-hidden relative border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full !p-0 rounded-2xl">
                            {/* Project Image */}
                            <div className="relative h-56 w-full overflow-hidden border-b border-slate-100 bg-slate-50">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 rounded-full hover:bg-white shadow-lg transition-transform hover:scale-110 text-primary">
                                            <Globe size={20} />
                                        </a>
                                    )}
                                </div>
                                {/* Optional Feature Badge */}
                                {project.title === 'JYNM' && (
                                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                                        Featured Case Study
                                    </div>
                                )}
                            </div>

                            <div className="relative z-10 p-6 flex flex-col flex-grow bg-white">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                                    {project.shortDescription || project.description}
                                </p>

                                <div className="space-y-5 mt-auto">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-600 border border-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-500 border border-slate-200">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                                        <Link href={`/projects/${project.id}`} className="w-full">
                                            <Button variant="outline" size="sm" className="w-full text-xs h-10 font-semibold bg-white hover:bg-slate-50 border-slate-200 text-slate-700">
                                                Case Study
                                            </Button>
                                        </Link>

                                        {project.live ? (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full">
                                                <Button size="sm" className="w-full text-xs h-10 gap-1.5 font-semibold bg-slate-900 hover:bg-slate-800 text-white">
                                                    Live Site <ArrowExternal size={12} />
                                                </Button>
                                            </a>
                                        ) : (
                                            <div className="w-full h-10"></div>
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
