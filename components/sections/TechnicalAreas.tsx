"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
    Code,
    Zap,
    Database,
    Shield,
    Workflow,
    Activity,
    FileJson,
    FileText,
    Share2,
    LayoutDashboard
} from "lucide-react";

const areas = [
    {
        icon: <Code size={32} />,
        title: "Full-Stack Development",
        description: "Backend-driven architecture with modern frontend frameworks",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: <Zap size={32} />,
        title: "RESTful API Design",
        description: "API design, integration, validation, and testing",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: <Database size={32} />,
        title: "SQL & Database",
        description: "Schema design, joins, migrations, and query optimization",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        icon: <Shield size={32} />,
        title: "Authentication & Security",
        description: "Role-based access control and secure authentication flows",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    },
    {
        icon: <Share2 size={32} />, // Using Share2 as a proxy for workflow/process if Workflow isn't available, or Shuffle
        title: "Backend Workflows",
        description: "Transaction-oriented backend systems and business logic",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
    {
        icon: <Activity size={32} />,
        title: "API Testing & Debugging",
        description: "Comprehensive testing, validation, and reliability checks",
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20"
    },
    {
        icon: <FileJson size={32} />,
        title: "Data Processing",
        description: "Web scraping, data ingestion, and structured extraction",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    },
    {
        icon: <LayoutDashboard size={32} />,
        title: "CMS & Admin Systems",
        description: "Content management and administrative dashboards",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    }
];

export function TechnicalAreas() {
    return (
        <section id="technical-areas" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Key Technical <span className="text-purple-500">Areas</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Specialized expertise across the full development lifecycle
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`h-full p-6 bg-gray-900/50 hover:bg-gray-800/50 border ${area.border} transition-colors group cursor-pointer`}>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${area.bg} ${area.color} group-hover:scale-110 transition-transform`}>
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
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
