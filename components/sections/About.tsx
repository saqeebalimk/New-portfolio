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
        period: "Dec 2024 – 31 Aug 2026",
        isLatest: true,
        logoContent: (
            <div className="flex items-center justify-center font-black italic text-[#E53935] tracking-tighter text-[1.1rem] leading-none w-full h-full relative">
                <span className="z-10">ARN</span>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-t border-l border-red-500 rotate-45 opacity-20"></div>
            </div>
        ),
        description: [
            "Worked on full-stack development using React.js, Python, Go and PostgreSQL.",
            "Leveraged AI-assisted development workflows for faster delivery and code optimization.",
            "Integrated modern services with existing enterprise architecture.",
            "Contributed to scalable, production-ready applications.",
        ],
    },
    {
        company: "SevenChats Private Limited",
        role: "Software Developer (Front End)",
        period: "Oct 2022 – Nov 2024",
        isLatest: false,
        logoContent: (
            <div className="flex items-center justify-center font-black text-[1.4rem] leading-none w-full h-full">
                <span className="text-black">7</span><span className="text-[#00BCD4]">C</span>
            </div>
        ),
        description: [
            "Developed high-performance web applications using React.js and Redux.",
            "Integrated LLM/AI features for real-time chatbot and messaging functionality.",
            "Managed state, API integrations and performance optimizations.",
            "Automated testing and deployment workflows.",
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
                            <strong className="text-slate-900 font-bold">Full Stack Software Engineer</strong> with 4 years of professional experience delivering complete, production-ready web applications. I bridge the gap between traditional enterprise architecture (Java/J2EE, Go, Spring Boot) and modern full-stack development (React, Node.js, Django).
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            For the past 3 years, I have extensively integrated AI Pair-Programming and Agentic AI workflows into my daily engineering process. I use AI-assisted and agentic engineering workflows to accelerate development while maintaining strong architectural, testing and code-quality practices, enabling me to write scalable code and deliver reliable, intelligent products. 
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            My core strength lies in combining deep foundational language expertise with modern tooling to execute end-to-end solutions efficiently.
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

                {/* Experience Section — Left-Aligned Styled Timeline */}
                <motion.div id="experience" className="scroll-mt-24">
                    <div className="mb-12 text-left">
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-full mb-3 border border-blue-100">
                            EXPERIENCE
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">My Professional Journey</h3>
                        <p className="text-slate-500 max-w-2xl text-[15px]">A journey of continuous learning, building and creating impact.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto pb-10 ml-2 sm:ml-0">
                        {/* Continuous Vertical Line */}
                        <div className="absolute left-2.5 top-8 bottom-0 w-px bg-slate-200/80 z-0"></div>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative pl-12 sm:pl-14 pt-2 group"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-1 top-9 w-3.5 h-3.5 bg-blue-500 rounded-full border-[3px] border-white shadow-sm z-10 group-hover:scale-125 transition-transform duration-300" />

                                    {/* White Experience Card */}
                                    <div className="relative bg-white rounded-[1rem] border border-slate-100 p-6 sm:p-7 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300">
                                        {exp.isLatest && (
                                            <div className="absolute -top-3 right-6 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 border border-emerald-100 shadow-sm">
                                                <span className="text-emerald-500 text-[10px]">✦</span> Latest
                                            </div>
                                        )}
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-4">
                                            <div className="flex items-center gap-4">
                                                {/* Logo Emulator */}
                                                <div className="w-12 h-12 rounded-full border border-slate-100 shadow-sm flex items-center justify-center bg-white flex-shrink-0 overflow-hidden">
                                                    {exp.logoContent}
                                                </div>
                                                <div>
                                                    <h4 className="text-[17px] font-bold text-slate-900 leading-tight mb-0.5">{exp.company}</h4>
                                                    <p className="text-blue-500 font-semibold text-[13px]">{exp.role}</p>
                                                </div>
                                            </div>
                                            <div className="text-sm font-medium text-slate-500 self-start sm:self-center">
                                                {exp.period}
                                            </div>
                                        </div>
                                        
                                        <ul className="space-y-2 mt-4 sm:pl-[4rem]">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[14px] text-slate-600 hover:text-slate-800 transition-colors">
                                                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
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
