"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In <span className="text-primary">Touch</span></h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's talk about your project</h3>
                        <p className="text-gray-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex items-center space-x-4 bg-transparent border border-white/10 hover:border-primary/50 cursor-pointer">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Mail me</h4>
                                    <p className="text-white font-medium">alikhanmohammed342@gmail.com</p>
                                </div>
                            </Card>

                            <Card className="flex items-center space-x-4 bg-transparent border border-white/10 hover:border-primary/50 cursor-pointer">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Call me</h4>
                                    <p className="text-white font-medium">+91 8792248396</p>
                                </div>
                            </Card>

                            <Card className="flex items-center space-x-4 bg-transparent border border-white/10 hover:border-primary/50 cursor-pointer">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Location</h4>
                                    <p className="text-white font-medium">Bangalore, India</p>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            action="https://formsubmit.co/alikhanmohammed342@gmail.com"
                            method="POST"
                            className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full h-32 bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
