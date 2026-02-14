"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRef, MouseEvent } from "react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description?: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animations for tilt
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
        stiffness: 150,
        damping: 20,
    });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Normalize to -0.5 to 0.5 range
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
            className="group relative bg-background-card rounded-2xl border border-white/[0.08] 
        hover:border-flame transition-all duration-300
        shadow-[0_2px_8px_rgba(0,0,0,0.2)] 
        hover:shadow-[0_8px_24px_rgba(254,127,45,0.25)]
        overflow-hidden"
        >
            {/* Subtle floating background gradient */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(254,127,45,0.08) 0%, transparent 60%)",
                }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Card content */}
            <div className="relative p-8 flex flex-col items-center text-center h-full min-h-[280px]">
                {/* Icon circle with glow */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                >
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 rounded-full bg-gradient-radial from-flame/20 via-flame/10 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-150" />

                    {/* Icon container */}
                    <div className="relative w-20 h-20 rounded-full bg-[#1a1b1c] 
            flex items-center justify-center
            border border-white/[0.05]
            group-hover:border-flame/30 transition-colors duration-300">
                        <Icon className="w-9 h-9 text-flame" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold font-mono text-text-primary mb-3">
                    {title}
                </h3>

                {/* Description (optional) */}
                {description && (
                    <p className="text-sm text-text-secondary font-mono leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Abstract background pattern */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-flame" />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-flame" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-flame" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}
