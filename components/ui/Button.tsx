import { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, HTMLMotionProps } from "framer-motion";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-black hover:bg-primary/80 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)]",
            secondary: "bg-secondary text-white hover:bg-secondary/80 shadow-[0_0_15px_rgba(112,0,255,0.5)] hover:shadow-[0_0_25px_rgba(112,0,255,0.7)]",
            outline: "border border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(0,240,255,0.2)]",
            ghost: "hover:bg-white/10 text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                ref={ref}
                className={cn(
                    "rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
