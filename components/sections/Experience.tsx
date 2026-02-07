"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
    {
        company: "ARN Systems",
        role: "Software Developer",
        period: "Dec 2024 – Present",
        description: [
            "Improved performance by 30% through optimization techniques",
            "Delivered end-to-end features for enterprise clients",
            "Reduced deployment time by 25% via CI/CD improvements"
        ]
    },
    {
        company: "Seven Chats Pvt Ltd",
        role: "Software Developer",
        period: "Oct 2022 – Nov 2024",
        description: [
            "Developed robust React + Redux applications used by thousands of users",
            "Optimized REST APIs reducing latency by 40%",
            "Increased user engagement by 20% through UI/UX enhancements"
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Work <span className="text-primary">Experience</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2"></div>

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_#00f0ff]"></div>

                            <div className={`md:flex justify-between items-start ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                <div className="md:w-[45%] mb-2 md:mb-0"></div>
                                <div className={`md:w-[45%] glass p-6 rounded-xl border-l-4 ${index % 2 === 0 ? "border-l-primary" : "border-l-secondary"}`}>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <div className="flex items-center text-primary mb-4">
                                        <Briefcase size={16} className="mr-2" />
                                        <span className="font-semibold">{exp.company}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm mb-4">
                                        <Calendar size={16} className="mr-2" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-300">
                                                <ChevronRight size={16} className="mr-2 mt-1 text-primary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
