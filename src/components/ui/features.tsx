"use client";

import { motion } from "framer-motion";
import {
    Shield,
    Zap,
    BarChart3,
    Brain,
    Clock,
    Target,
    LineChart
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
    title: string;
    description: string;
    icon: any;
    className?: string;
}

const features: Feature[] = [
    {
        title: "AI Strategy Builder",
        description: "Build sophisticated trading strategies with our no-code AI-powered interface. No programming required.",
        icon: Brain,
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Multi-Stage Validation",
        description: "6 mandatory validation gates ensure your strategy is ready before risking real capital.",
        icon: Shield,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Real-Time Scanners",
        description: "Scan thousands of stocks in real-time to find opportunities matching your criteria.",
        icon: Target,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Advanced Backtesting",
        description: "Test strategies across 5+ years of historical data with comprehensive performance metrics and market regime analysis.",
        icon: BarChart3,
        className: "md:col-span-1 md:row-span-2",
    },
];

export function Features() {
    return (
        <section className="container py-24 bg-background-base" id="features">
            <div className="text-center space-y-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold font-mono tracking-tight sm:text-5xl text-text-primary"
                >
                    Explore the Latest Features
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-text-secondary text-lg font-mono max-w-3xl mx-auto"
                >
                    Powerful set of new features and enhancements designed to help you trade faster, smarter, and more systematically
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                        className={cn(
                            "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-background-card p-8",
                            "hover:border-flame/30 transition-all duration-300",
                            "hover:shadow-elevated",
                            feature.className
                        )}
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-flame/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-flame/10 group-hover:bg-flame/20 transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-flame" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold font-mono text-text-primary mb-3 group-hover:text-flame transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary font-mono text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-flame/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-background-card p-8 hover:border-flame/30 transition-all duration-300 hover:shadow-elevated"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-flame/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-flame/10 group-hover:bg-flame/20 transition-colors duration-300">
                            <Zap className="w-6 h-6 text-flame" />
                        </div>
                        <h3 className="text-lg font-bold font-mono text-text-primary mb-2 group-hover:text-flame transition-colors duration-300">
                            Lightning Fast Execution
                        </h3>
                        <p className="text-text-secondary font-mono text-sm">
                            Execute trades in milliseconds with our optimized infrastructure
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.75,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-background-card p-8 hover:border-flame/30 transition-all duration-300 hover:shadow-elevated"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-flame/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-flame/10 group-hover:bg-flame/20 transition-colors duration-300">
                            <Clock className="w-6 h-6 text-flame" />
                        </div>
                        <h3 className="text-lg font-bold font-mono text-text-primary mb-2 group-hover:text-flame transition-colors duration-300">
                            24/7 Monitoring
                        </h3>
                        <p className="text-text-secondary font-mono text-sm">
                            Round-the-clock monitoring and alerts for your active strategies
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.9,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-background-card p-8 hover:border-flame/30 transition-all duration-300 hover:shadow-elevated"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-flame/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-flame/10 group-hover:bg-flame/20 transition-colors duration-300">
                            <LineChart className="w-6 h-6 text-flame" />
                        </div>
                        <h3 className="text-lg font-bold font-mono text-text-primary mb-2 group-hover:text-flame transition-colors duration-300">
                            Performance Analytics
                        </h3>
                        <p className="text-text-secondary font-mono text-sm">
                            Deep insights into strategy performance with advanced metrics
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
