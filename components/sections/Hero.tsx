"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Mail, Zap, Server, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen pt-28 pb-20 relative flex flex-col justify-center overflow-hidden">
            {/* Subtle light background elements targeting `#F8FAFC` matching */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    
                    {/* Left Column: Typography & CTAs */}
                    <div className="flex-1 w-full text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Availability Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-green-50/80 border border-green-200 text-green-700 rounded-full text-sm font-semibold shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for Opportunities
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.1]">
                                Hi, I&apos;m <br className="hidden lg:block" />
                                <span className="text-slate-800">Mohammed Saqeeb</span>
                            </h1>

                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 text-primary tracking-tight">
                                Software Engineer
                            </h2>
                            
                            <p className="text-lg sm:text-xl text-slate-900 max-w-2xl mb-4 leading-relaxed mx-auto lg:mx-0 font-bold">
                                Full Stack Software Engineer building scalable web applications with React, Node.js, Python, Go, Java and modern AI-assisted engineering workflows.
                            </p>

                            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
                                I combine strong software engineering fundamentals with modern AI tools to build scalable, reliable and impactful products.
                            </p>
                        </motion.div>

                        {/* Buttons Block Removed per request */}

                        {/* Statistic Metrics row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:text-left border-t border-slate-200 pt-8"
                        >
                            <div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">4+</p>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">10+</p>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Projects Delivered</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">5+</p>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Core Technologies</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary mb-1">∞</p>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Learning & Growing</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Code Widget Decoration */}
                    {/* Right Column: User Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:flex flex-col items-end flex-shrink-0 w-full max-w-[450px]"
                    >
                        <div className="w-full relative shadow-2xl rounded-[2rem] bg-white border border-slate-200 p-2 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-slate-100 shadow-inner">
                                <img
                                    src="/profile.jpg"
                                    alt="Mohammed Saqeeb"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Capability Strip Below Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Code2 size={20} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm mb-1">Full Stack Development</h4>
                            <p className="text-xs text-slate-500 font-medium leading-tight">React • Node.js • Django • Go • Java</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm mb-1">AI-Assisted Engineering</h4>
                            <p className="text-xs text-slate-500 font-medium leading-tight">LLMs • RAG • Automation</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Server size={20} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm mb-1">Production Ready</h4>
                            <p className="text-xs text-slate-500 font-medium leading-tight">Deploy • Monitor • Scale</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4 cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm mb-1">Open to Opportunities</h4>
                            <p className="text-xs text-slate-500 font-medium leading-tight">Let&apos;s build something great →</p>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
}
