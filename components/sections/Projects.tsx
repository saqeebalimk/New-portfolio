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
        <section id="projects" className="py-20 relative px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured <span className="text-secondary">Projects</span></h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <Card key={project.id} className="group overflow-hidden relative border-0 bg-gray-900/50 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors text-white">
                                            <Globe size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Default Gradient Overlay (Subtle) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${index % 4 === 0 ? 'from-blue-500/5 to-cyan-500/5' :
                                index % 4 === 1 ? 'from-purple-500/5 to-pink-500/5' :
                                    index % 4 === 2 ? 'from-yellow-400/5 to-orange-500/5' :
                                        'from-green-400/5 to-emerald-600/5'
                                } pointer-events-none`} />

                            <div className="relative z-10 p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.shortDescription || project.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/5 rounded text-[10px] font-medium text-gray-300 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-medium text-gray-500 border border-white/5">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <Link href={`/projects/${project.id}`} className="w-full">
                                            <Button variant="outline" size="sm" className="w-full text-xs h-9">
                                                View Case Study
                                            </Button>
                                        </Link>

                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full">
                                                <Button size="sm" className="w-full text-xs h-9 gap-1">
                                                    Live Site <ArrowExternal size={12} />
                                                </Button>
                                            </a>
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
            strokeWidth="2"
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
