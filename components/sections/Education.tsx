"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section className="py-24 bg-slate-50/50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-10 gap-4">
                            <div className="p-3 bg-blue-50 rounded-xl text-primary"><GraduationCap size={28} /></div>
                            <h2 className="text-3xl font-bold text-slate-900">Education</h2>
                        </div>

                        <Card className="bg-white border-l-4 border-l-primary border-t border-r border-b border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">B.Tech Information Technology</h3>
                            <p className="text-primary font-semibold mb-2">HKBK Institute of Technology</p>
                            <p className="text-slate-400 text-sm font-medium mb-4">Graduated: 2022</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Focused on core computer science foundations, algorithms, and web technologies.
                                Participated in various hackathons and technical symposiums.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-10 gap-4">
                            <div className="p-3 bg-teal-50 rounded-xl text-secondary"><Award size={28} /></div>
                            <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Web Development Zero To Master",
                                "Modern React With Redux",
                                "Advanced React And Redux",
                                "Unlocking Power of JavaScript"
                            ].map((cert, index) => (
                                <Card key={index} hoverEffect={false} className="p-5 flex items-center gap-4 bg-white border border-slate-200 shadow-sm">
                                    <div className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(13,148,136,0.3)] flex-shrink-0"></div>
                                    <span className="font-semibold text-slate-700">{cert}</span>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
