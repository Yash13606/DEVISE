"use client";

import {
    Brain,
    Shield,
    BarChart3,
    Zap,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
    {
        title: 'AI Strategy Builder',
        icon: Brain,
        description: 'Build sophisticated trading strategies with our no-code AI-powered interface. No programming required.',
    },
    {
        title: 'Multi-Stage Validation',
        icon: Shield,
        description: '6 mandatory validation gates ensure your strategy is ready before risking real capital.',
    },
    {
        title: 'Advanced Backtesting',
        icon: BarChart3,
        description: 'Test strategies across 5+ years of historical data with comprehensive performance metrics.',
    },
    {
        title: 'Lightning Fast Execution',
        icon: Zap,
        description: 'Execute trades in milliseconds with our optimized infrastructure.',
    },
];

export function UnifiedFeatures() {
    return (
        <section className="py-20 md:py-40 bg-background-base" id="features">
            <div className="mx-auto w-full max-w-7xl space-y-12 md:space-y-16 px-4">
                <AnimatedContainer className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold font-mono tracking-wide text-balance md:text-5xl lg:text-6xl text-text-primary">
                        Explore the Latest Features
                    </h2>
                    <p className="text-text-secondary mt-6 text-base font-mono tracking-wide text-balance md:text-lg leading-relaxed">
                        Powerful set of new features and enhancements designed to help you trade faster, smarter, and more systematically
                    </p>
                </AnimatedContainer>

                <AnimatedContainer
                    delay={0.4}
                    className="grid grid-cols-1 divide-x divide-y divide-dashed divide-white/[0.08] border border-dashed border-white/[0.08] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} />
                    ))}
                </AnimatedContainer>
            </div>
        </section>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: React.ComponentProps<typeof motion.div>['className'];
    children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
