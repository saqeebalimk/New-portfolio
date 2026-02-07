"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
    label: string;
    percentage: number;
    color?: string; // Tailwind gradient class or hex color
}

export function ProgressBar({ label, percentage, color = "bg-primary" }: ProgressBarProps) {
    return (
        <div className="mb-4 max-w-[85%] mx-auto">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">{label}</span>
                <span className="text-sm font-medium text-gray-400">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5 md:h-2.5 overflow-hidden">
                <motion.div
                    className={`h-1.5 md:h-2.5 rounded-full ${color}`}
                    style={{
                        boxShadow: color.includes('gradient') ? '0 0 10px currentColor' : `0 0 10px ${color}`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}
