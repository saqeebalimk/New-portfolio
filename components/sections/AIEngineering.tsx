"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Bot, GitBranch, Cpu, MessageSquare, Search, Zap } from "lucide-react";

const aiCapabilities = [
    {
        icon: <Bot size={24} />,
        title: "AI Pair Programming",
        description: "Using AI coding assistants as a day-to-day engineering tool to accelerate implementation, reduce boilerplate, and explore solutions — while maintaining full ownership of architecture and code quality.",
        textColor: "text-violet-700",
        bgLight: "bg-violet-50",
    },
    {
        icon: <GitBranch size={24} />,
        title: "Agentic Development",
        description: "Using coding agents to inspect large repositories, reason across multiple files, plan and execute implementation tasks, and run validation workflows — compressing complex engineering cycles.",
        textColor: "text-blue-700",
        bgLight: "bg-blue-50",
    },
    {
        icon: <Cpu size={24} />,
        title: "LLM Integration",
        description: "Integrating LLM APIs (OpenAI, Gemini) into production applications — building conversational interfaces, AI-assisted workflows, and intelligent data processing pipelines.",
        textColor: "text-teal-700",
        bgLight: "bg-teal-50",
    },
    {
        icon: <MessageSquare size={24} />,
        title: "Prompt Engineering",
        description: "Designing structured prompts and managing context effectively when working with large codebases and complex engineering tasks — improving the reliability and accuracy of AI-assisted outputs.",
        textColor: "text-indigo-700",
        bgLight: "bg-indigo-50",
    },
    {
        icon: <Search size={24} />,
        title: "RAG & Workflows",
        description: "Understanding and applying retrieval-augmented generation patterns to build AI workflows that operate on domain-specific knowledge — improving relevance and grounding of AI responses.",
        textColor: "text-emerald-700",
        bgLight: "bg-emerald-50",
    },
    {
        icon: <Zap size={24} />,
        title: "AI Automation",
        description: "Automating repetitive engineering and data-processing workflows using AI — from codebase analysis and documentation generation to structured data extraction and task orchestration.",
        textColor: "text-orange-700",
        bgLight: "bg-orange-50",
    },
];

export function AIEngineering() {
    return (
        <section id="ai-engineering" className="py-24 relative bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        AI-Assisted <span className="text-violet-600">Software Engineering</span>
                    </h2>
                    <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Using modern AI capabilities to amplify software engineering — not replace it.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aiCapabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-6 bg-white border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-default">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${capability.bgLight} ${capability.textColor} group-hover:scale-110 transition-transform duration-300`}>
                                    {capability.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{capability.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {capability.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Positioning note positioning me as an engineer, not researcher */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-6 py-4 rounded-2xl bg-blue-50/80 border border-blue-200 shadow-sm text-slate-700 text-sm max-w-3xl leading-relaxed relative">
                        <strong className="text-slate-900 font-bold mr-1">My Approach:</strong> 
                        I use these tools to move faster, understand unfamiliar systems, investigate bugs, and handle repetitive work — so I can focus pure engineering effort on robust architecture, complex problem-solving, and delivering reliable software.
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
