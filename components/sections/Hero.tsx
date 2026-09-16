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
                            
                            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-4 leading-relaxed mx-auto lg:mx-0 font-medium">
                                Full Stack Software Engineer building scalable web applications with React, Node.js, Python, Go, Java and modern AI-assisted engineering workflows.
                            </p>

                            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
                                I combine strong software engineering fundamentals with modern AI tools to build scalable, reliable and impactful products.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <Link href="#projects">
                                <Button size="lg" className="w-full sm:w-auto font-semibold">
                                    View My Work
                                </Button>
                            </Link>
                            <a href="https://drive.google.com/file/d/1e_rzX-uPoTYwcgX0vE0Kb1hYcqVeN9M8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold bg-white">
                                    <Download size={18} className="mr-1" /> Download Resume
                                </Button>
                            </a>
                            <Link href="#contact">
                                <Button variant="ghost" size="lg" className="w-full sm:w-auto font-semibold text-slate-700 hover:bg-slate-200">
                                    Let&apos;s Connect
                                </Button>
                            </Link>
                        </motion.div>

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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:flex flex-col items-end flex-shrink-0 w-full max-w-[450px]"
                    >
                        {/* Premium Floating Card */}
                        <div className="w-full relative shadow-2xl rounded-2xl bg-white border border-slate-200 p-6 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Decorative Top Mac UI Dots */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            
                            <div className="font-mono text-sm leading-relaxed p-4 bg-slate-50 rounded-lg text-slate-700 shadow-inner">
                                <span className="text-purple-600">const</span> <span className="text-blue-600">developer</span> = {'{'}
                                <br />
                                &nbsp;&nbsp;<span className="text-slate-500">passion:</span> <span className="text-amber-600">&quot;Building&quot;</span>,
                                <br />
                                &nbsp;&nbsp;<span className="text-slate-500">focus:</span> <span className="text-amber-600">&quot;Impact&quot;</span>,
                                <br />
                                &nbsp;&nbsp;<span className="text-slate-500">mindset:</span> <span className="text-amber-600">&quot;Always Learning&quot;</span>
                                <br />
                                {'}'};
                            </div>
                            
                            <div className="mt-6 flex items-center justify-between text-slate-500 text-xs font-semibold px-2">
                                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> Types Checked</span>
                                <span className="flex items-center gap-1"><Zap size={14} className="text-amber-500"/> Production Ready</span>
                            </div>
                            
                            {/* Soft overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-blue-50/20 pointer-events-none" />
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
