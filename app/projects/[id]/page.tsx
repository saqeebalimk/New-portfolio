"use client";

import { notFound, useParams } from "next/navigation";
import projectsData from "@/data/projects.json";
import { Hero } from "@/components/sections/Hero"; // Reusing components if needed, or building new
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Interface for project data matching JSON
interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    tech: string[];
    features?: string[];
    live?: string;
    github?: string;
    roles?: string[];
    images?: {
        main: string;
        gallery: string[];
    };
}

export default function ProjectDetail() {
    const params = useParams();
    const id = params.id as string;

    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/#projects">
                    <Button>Back to Projects</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navbar reuse or specific back nav */}
            <div className="fixed top-0 left-0 right-0 z-50 p-4">
                <Link href="/#projects">
                    <Button variant="outline" size="sm" className="gap-2 backdrop-blur-md bg-black/50 border-white/10">
                        <ArrowLeft size={16} /> Back to Projects
                    </Button>
                </Link>
            </div>

            <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Button className="gap-2">
                                    Live Demo <ExternalLink size={18} />
                                </Button>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="gap-2">
                                    Source Code <Github size={18} />
                                </Button>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Left Column: Details */}
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Project Overview
                            </h2>
                            <div className="text-gray-300 space-y-4 leading-relaxed whitespace-pre-line">
                                {project.fullDescription || project.description}
                            </div>
                        </section>

                        {project.features && (
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-secondary rounded-full"></span>
                                    Key Features
                                </h2>
                                <ul className="grid gap-4">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/5">
                                            <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Meta */}
                    <div className="space-y-8">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-primary">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {project.roles && (
                                <>
                                    <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">My Role</h3>
                                    <ul className="space-y-2 mb-8">
                                        {project.roles.map((role, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                                {role}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Gallery Section if images exist */}
                {project.images?.gallery && project.images.gallery.length > 0 && (
                    <section className="mt-20">
                        <h2 className="text-3xl font-bold mb-10 text-center">Project Gallery</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.images.gallery.map((img, i) => (
                                <div key={i} className="relative h-64 rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors group">
                                    <Image
                                        src={img}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </main>


        </div>
    );
}
