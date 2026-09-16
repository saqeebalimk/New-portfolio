"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Get In <span className="text-primary">Touch</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 pl-0 lg:pl-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Let&apos;s talk about your project</h3>
                            <p className="text-slate-500 leading-relaxed max-w-md">
                                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <Card className="flex items-center space-x-5 bg-white border border-slate-200 shadow-sm hover:shadow-md cursor-pointer !pr-8 min-h-[5rem]">
                                <div className="p-3.5 bg-blue-50 rounded-xl text-primary flex-shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mail me</h4>
                                    <a href="mailto:alikhanmohammed342@gmail.com" className="text-slate-800 font-semibold truncate hover:text-primary transition-colors">alikhanmohammed342@gmail.com</a>
                                </div>
                            </Card>

                            <Card className="flex items-center space-x-5 bg-white border border-slate-200 shadow-sm hover:shadow-md cursor-pointer !pr-8 min-h-[5rem]">
                                <div className="p-3.5 bg-teal-50 rounded-xl text-secondary flex-shrink-0">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call me</h4>
                                    <a href="tel:+918792248396" className="text-slate-800 font-semibold hover:text-primary transition-colors">+91 8792248396</a>
                                </div>
                            </Card>

                            <Card className="flex items-center space-x-5 bg-white border border-slate-200 shadow-sm hover:shadow-md cursor-pointer !pr-8 min-h-[5rem]">
                                <div className="p-3.5 bg-violet-50 rounded-xl text-violet-600 flex-shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                                    <p className="text-slate-800 font-semibold">Bengaluru, India</p>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            action="https://formsubmit.co/alikhanmohammed342@gmail.com"
                            method="POST"
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner"
                        >
                            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full h-36 bg-white border border-slate-200 rounded-xl p-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-sm"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
