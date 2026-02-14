"use client";

import { FeatureCard } from "./feature-card";
import { TrendingUp, Layers, Target, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export function FeatureSection() {
    const features = [
        {
            icon: TrendingUp,
            title: "Scalper",
            description: "High-frequency trading strategies optimized for quick profits",
        },
        {
            icon: Layers,
            title: "Strategies",
            description: "Build and deploy sophisticated algorithmic trading strategies",
        },
        {
            icon: Target,
            title: "Scanners",
            description: "Real-time market scanners to identify trading opportunities",
        },
        {
            icon: BarChart3,
            title: "Backtest",
            description: "Validate strategies with comprehensive historical data analysis",
        },
    ];

    return (
        <section className="py-[120px] bg-background-base">
            <div className="container mx-auto px-4 max-w-[1440px]">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-mono text-text-primary mb-4">
                        Powerful Trading Tools
                    </h2>
                    <p className="text-text-secondary font-mono text-lg max-w-2xl mx-auto">
                        Professional-grade features designed for serious algorithmic traders
                    </p>
                </motion.div>

                {/* Feature cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
