"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { label: "JavaScript", percentage: 95 },
            { label: "TypeScript", percentage: 90 },
            { label: "Python", percentage: 90 },
            { label: "SQL", percentage: 85 },
            { label: "HTML5 / CSS3", percentage: 95 },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { label: "React.js", percentage: 95 },
            { label: "Next.js 14", percentage: 70 },
            { label: "React Native", percentage: 85 },
            { label: "Tailwind CSS", percentage: 95 },
            { label: "Framer Motion", percentage: 75 },
            { label: "Redux / Zustand", percentage: 70 },
        ],
    },
    {
        title: "Backend",
        skills: [
            { label: "Django", percentage: 90 },
            { label: "Django REST", percentage: 90 },
            { label: "Node.js", percentage: 85 },
            { label: "Express.js", percentage: 85 },
            { label: "FastAPI", percentage: 80 },
        ],
    },
    {
        title: "Database & Cloud",
        skills: [
            { label: "PostgreSQL", percentage: 90 },
            { label: "MySQL", percentage: 85 },
            { label: "Supabase", percentage: 90 },
            { label: "Azure", percentage: 80 },
            { label: "Redis", percentage: 70 },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { label: "Git / GitHub", percentage: 95 },
            { label: "Docker", percentage: 80 },
            { label: "Postman", percentage: 90 },
            { label: "Figma", percentage: 75 },
            { label: "Vercel", percentage: 90 },
            { label: "VS Code", percentage: 95 },
        ],
    },
    {
        title: "Testing & QA",
        skills: [
            { label: "API Testing & Debugging", percentage: 95 },
            { label: "Web App Testing", percentage: 90 },
            { label: "Game Testing", percentage: 85 },
            { label: "Data Integrity Checks", percentage: 90 },
            { label: "System Validation", percentage: 85 },
            { label: "Performance Profiling", percentage: 80 },
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical <span className="text-secondary">Skills</span></h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="border border-white/5 hover:border-secondary/30">
                            <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <ProgressBar
                                        key={idx}
                                        label={skill.label}
                                        percentage={skill.percentage}
                                        color={index % 2 === 0 ? "#00f0ff" : "#7000ff"}
                                    />
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
