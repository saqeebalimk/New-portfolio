"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
    Code,
    Zap,
    Database,
    Shield,
    Activity,
    FileJson,
    Share2,
    LayoutDashboard,
    Bot,
    Server
} from "lucide-react";

const areas = [
    {
        icon: <Code size={26} />,
        title: "Full-Stack Development",
        description: "Backend-driven architecture with modern frontend frameworks",
        textColor: "text-blue-700",
        bgLight: "bg-blue-50"
    },
    {
        icon: <Zap size={26} />,
        title: "RESTful API Design",
        description: "API design, integration, validation, and testing",
        textColor: "text-violet-700",
        bgLight: "bg-violet-50"
    },
    {
        icon: <Database size={26} />,
        title: "SQL & Database",
        description: "Schema design, joins, migrations, and query optimization",
        textColor: "text-emerald-700",
        bgLight: "bg-emerald-50"
    },
    {
        icon: <Shield size={26} />,
        title: "Authentication & Security",
        description: "Role-based access control and secure authentication flows",
        textColor: "text-rose-700",
        bgLight: "bg-rose-50"
    },
    {
        icon: <Share2 size={26} />,
        title: "Backend Workflows",
        description: "Transaction-oriented backend systems and business logic",
        textColor: "text-amber-700",
        bgLight: "bg-amber-50"
    },
    {
        icon: <Activity size={26} />,
        title: "API Testing & Debugging",
        description: "Comprehensive testing, validation, and reliability checks",
        textColor: "text-teal-700",
        bgLight: "bg-teal-50"
    },
    {
        icon: <FileJson size={26} />,
        title: "Data Processing",
        description: "Web scraping, data ingestion, and structured extraction",
        textColor: "text-fuchsia-700",
        bgLight: "bg-fuchsia-50"
    },
    {
        icon: <LayoutDashboard size={26} />,
        title: "CMS & Admin Systems",
        description: "Content management and administrative dashboards",
        textColor: "text-yellow-700",
        bgLight: "bg-yellow-50"
    },
    {
        icon: <Server size={26} />,
        title: "Go / Golang Backend",
        description: "High-performance REST APIs and backend services in Go",
        textColor: "text-sky-700",
        bgLight: "bg-sky-50"
    },
    {
        icon: <Bot size={26} />,
        title: "AI-Assisted Engineering",
        description: "AI pair programming, agentic workflows and LLM integration",
        textColor: "text-indigo-700",
        bgLight: "bg-indigo-50"
    }
];

export function TechnicalAreas() {
    return (
        <section id="technical-areas" className="py-24 relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Engineering <span className="text-secondary">Strengths</span>
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Core technical areas across the full development lifecycle
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-default">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${area.bgLight} ${area.textColor} group-hover:scale-110 transition-transform duration-300`}>
                                    {area.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {area.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
