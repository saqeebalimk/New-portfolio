"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-medium tracking-wider uppercase mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="text-white">Mohammed Saqeeb Khan</span>
                    </h1>
                    <h2 className="text-2xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Full Stack Developer
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                >
                    Full Stack Developer with 3+ years of experience building scalable web applications
                    using React, Node.js, Django, and SQL.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="#projects">
                        <Button size="lg" className="w-full sm:w-auto">
                            View Projects <ArrowRight size={20} />
                        </Button>
                    </Link>
                    <a href="https://drive.google.com/file/d/1bFgSmU1ktGQyuHFlVjC_nGGOcCMRJV4B/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Download Resume <Download size={20} />
                        </Button>
                    </a>
                    <Link href="#contact">
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                            Contact Me <Mail size={20} />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
        </section>
    );
}
