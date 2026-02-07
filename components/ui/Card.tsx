import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,240,255,0.15)" } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`glass-card p-6 ${className || ""}`}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export { Card };
