"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Briefcase, Calendar, MapPin, Mail, User, Clock, CheckCircle2 } from "lucide-react";

const skillCategories = [
    {
        title: "AI & Modern Engineering",
        badgeStyle: "bg-violet-50 text-violet-700 border-violet-100 hover:bg-violet-100 hover:border-violet-200",
        skills: ["AI Pair Programming", "Agentic AI Workflows", "LLM Integration", "Prompt Engineering", "RAG", "OpenAI API", "Gemini API", "AI Automation", "Claude Code"],
    },
    {
        title: "Programming Languages",
        badgeStyle: "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:border-blue-200",
        skills: ["JavaScript", "TypeScript", "Python", "Go / Golang", "Java", "SQL", "HTML5", "CSS3"],
    },
    {
        title: "Frontend Engineering",
        badgeStyle: "bg-sky-50 text-sky-700 border-sky-100 hover:bg-sky-100 hover:border-sky-200",
        skills: ["React.js", "Next.js", "Redux", "React Router", "Tailwind CSS", "Material UI", "SCSS", "Framer Motion", "GSAP"],
    },
    {
        title: "Backend & Architecture",
        badgeStyle: "bg-teal-50 text-teal-700 border-teal-100 hover:bg-teal-100 hover:border-teal-200",
        skills: ["Node.js", "Express.js", "Django", "Django REST Framework", "Go REST APIs", "Spring Boot", "Spring MVC", "RESTful APIs", "Microservices"],
    },
    {
        title: "Databases & Storage",
        badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200",
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
    },
    {
        title: "DevOps & Cloud",
        badgeStyle: "bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-100 hover:border-orange-200",
        skills: ["Git", "GitHub", "Docker", "Linux", "Nginx", "CI/CD", "AWS", "Azure"],
    },
];

const experiences = [
    {
        company: "ARN Systems Pvt Ltd",
        role: "Software Developer",
        period: "Dec 2024 — 31 Aug 2026",
        statusBadge: "PROJECT / CONTRACT COMPLETED",
        description: [
            "Architected and delivered JYNM — a full-stack automotive salvage marketplace (React + Vite + Django + PostgreSQL + Redis) deployed on Linux/Nginx with Gunicorn, serving lead generation for vendors across multiple locations.",
            "Engineered a technical SEO strategy including 301 redirect architecture, canonical URLs, and structured data markup, improving organic search visibility for automotive salvage queries.",
            "Built AHA Technologies — an AI-powered service platform integrating OpenAI APIs and WhatsApp Business for electronics diagnosis workflows and conversational lead capture.",
            "Used AI pair-programming and agentic development workflows as part of day-to-day engineering — applying prompt engineering and context management across large codebases.",
            "Managed production DevOps on Linux/Nginx with Docker: VPS provisioning, deployment pipelines, and production environment stability.",
            "Worked across legacy system integration and modern service architecture, using AI-assisted codebase analysis to understand and refactor existing systems.",
        ],
    },
    {
        company: "SevenChats Private Limited",
        role: "Software Developer / Front End Developer",
        period: "Oct 2022 – Nov 2024",
        statusBadge: null,
        description: [
            "Developed and maintained core product features for a social networking and real-time chat platform serving an active user base.",
            "Built and managed reusable React component libraries with Redux for application state, improving consistency and maintainability across the product.",
            "Integrated RESTful APIs and implemented JWT-based authentication and user session management.",
            "Worked on real-time communication features using WebSocket-based architecture (Socket.io).",
            "Contributed to UI performance improvements, responsive design implementation, and reduction of unnecessary re-renders.",
            "Delivered production-ready features consistently in an Agile cross-functional team environment across multiple release cycles.",
        ],
    },
];

export function About() {
    return (
        <section id="about" className="py-24 relative bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* About Me Section: Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
                    {/* Left Column: Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">About <span className="text-primary">Me</span></h2>
                        <div className="h-1 w-12 bg-primary rounded-full mb-8" />
                        
                        <p className="text-lg text-slate-600 leading-relaxed">
                            <strong className="text-slate-900 font-bold">Full Stack Software Engineer</strong> with 4 years of professional experience delivering complete, production-ready web applications. I combine strong software engineering fundamentals with modern full-stack development across React, Node.js, Django, Go and Java/Spring Boot.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            I have experience building frontend interfaces with <strong className="text-slate-800 font-semibold">React.js and Next.js</strong>, RESTful APIs and backend services with <strong className="text-slate-800 font-semibold">Node.js, Django and Go</strong>, database-driven applications using <strong className="text-slate-800 font-semibold">PostgreSQL, MongoDB and MySQL</strong>, authentication systems, and production deployments.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            I also use AI-assisted software engineering workflows — including AI pair programming, LLM integrations, prompt engineering and agentic development tools — to accelerate development, investigate complex codebases and improve engineering productivity. My focus is understanding architecture, validating implementations, debugging systems and delivering reliable, maintainable software.
                        </p>
                    </motion.div>

                    {/* Right Column: Mini Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 grid sm:grid-cols-2 gap-4"
                    >
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg"><User size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Name</p>
                                <p className="text-sm font-semibold text-slate-800">Mohammed Saqeeb</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                            <div className="p-2.5 bg-violet-50 text-violet-600 rounded-lg"><MapPin size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-sm font-semibold text-slate-800">Bengaluru, Karnataka, India</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg"><Clock size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                                <p className="text-sm font-semibold text-slate-800">4+ Years</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-lg"><CheckCircle2 size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                                <p className="text-sm font-semibold text-slate-800">Open to Opportunities</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 sm:col-span-2">
                            <div className="p-2.5 bg-slate-50 text-slate-600 rounded-lg"><Mail size={20} /></div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:saqeebalimk@gmail.com" className="text-sm font-semibold text-primary hover:underline">saqeebalimk@gmail.com</a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section — Badge Grid Rewrite */}
                <motion.div id="skills" className="mb-32 scroll-mt-24">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Technical <span className="text-secondary">Skills</span></h3>
                        <p className="text-slate-500 max-w-2xl mx-auto">Categorized overview of my core competencies across the stack.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                            >
                                <Card className="bg-white border-slate-200 h-full !p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-lg font-bold text-slate-800 mb-5">{category.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors duration-200 ${category.badgeStyle}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section — Redesigned Timeline */}
                <motion.div id="experience" className="scroll-mt-24">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">My Professional <span className="text-primary">Journey</span></h3>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">A journey of continuous learning, building and creating impact.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto pb-10">
                        {/* Elegant Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2 z-0"></div>

                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute md:relative left-8 md:left-auto md:w-1/2 flex justify-center z-10 transform -translate-x-1/2 md:translate-x-0 mt-[1.125rem]">
                                        <div className="w-4 h-4 bg-white border-2 border-primary rounded-full shadow-[0_0_0_4px_rgba(255,255,255,1)] md:shadow-none"></div>
                                    </div>

                                    {/* Content Wrapping Area */}
                                    <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                        <div className={`md:px-12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                            
                                            {/* Job Header */}
                                            <div className="mb-4">
                                                {exp.statusBadge && (
                                                    <div className={`inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-wider rounded-md uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 ${index % 2 !== 0 && "md:float-right"} clear-both`}>
                                                        {exp.statusBadge}
                                                    </div>
                                                )}
                                                <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                                                <div className="flex flex-col md:flex-row items-baseline gap-2 mb-2 justify-start md:justify-end">
                                                    <p className={`font-semibold text-primary ${index % 2 === 0 && "md:order-1"}`}>{exp.company}</p>
                                                    <span className={`text-sm text-slate-500 flex items-center gap-1 ${index % 2 === 0 && "md:order-2"}`}>
                                                        <Calendar size={14} className="md:hidden" />
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* White Experience Card */}
                                            <Card className="!p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md text-left mt-4 text-slate-600">
                                                <ul className="space-y-3">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Card>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
}
