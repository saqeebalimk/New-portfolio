"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section className="py-20 bg-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-8 gap-4">
                            <div className="p-3 bg-primary/20 rounded-xl text-primary"><GraduationCap size={32} /></div>
                            <h2 className="text-3xl font-bold">Education</h2>
                        </div>

                        <Card className="border-l-4 border-l-primary">
                            <h3 className="text-xl font-bold text-white">B.Tech Information Technology</h3>
                            <p className="text-primary mt-1">HKBK Institute of Technology</p>
                            <p className="text-gray-400 text-sm mt-2">Graduated: 2022</p>
                            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                                Focused on core computer science foundations, algorithms, and web technologies.
                                Participated in various hackathons and technical symposiums.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-8 gap-4">
                            <div className="p-3 bg-secondary/20 rounded-xl text-secondary"><Award size={32} /></div>
                            <h2 className="text-3xl font-bold">Certifications</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Web Development Zero To Master",
                                "Modern React With Redux",
                                "Advanced React And Redux",
                                "Unlocking Power of JavaScript"
                            ].map((cert, index) => (
                                <Card key={index} hoverEffect={false} className="p-4 flex items-center gap-4 bg-white/5 border-white/5">
                                    <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_#7000ff]"></div>
                                    <span className="font-medium text-gray-200">{cert}</span>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
