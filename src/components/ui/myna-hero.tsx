"use client";

import * as React from "react";
import {
    Activity,
    ArrowRight,
    BarChart,
    Menu,
    Shield,
    Sparkles,
    Zap,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const navigationItems = [
    { title: "FEATURES", href: "#features" },
    { title: "VALIDATION", href: "#validation" },
    { title: "PRICING", href: "#pricing" },
    { title: "ABOUT", href: "#about" },
];

const labels = [
    { icon: Sparkles, label: "AI-Powered Strategy Builder" },
    { icon: Shield, label: "Multi-Stage Validation" },
    { icon: Activity, label: "Emotion Detection" },
];

const features = [
    {
        icon: BarChart,
        label: "Advanced Backtesting",
        description: "Test strategies across 5+ years of historical data with comprehensive performance metrics.",
    },
    {
        icon: Zap,
        label: "Intelligent Automation",
        description: "Deploy validated strategies with automated execution and real-time monitoring.",
    },
    {
        icon: Shield,
        label: "Safety-First Approach",
        description: "6 mandatory validation gates ensure you're ready before risking real capital.",
    },
];

export function MynaHero() {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const titleWords = [
        "AI-POWERED",
        "SAFE",
        "ALGORITHMIC",
        "TRADING",
        "PLATFORM",
    ];

    return (
        <div className="container mx-auto px-4 min-h-screen bg-background-base">
            <header>
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.jpeg"
                                alt="Devise Logo"
                                className="h-12 w-12 object-cover rounded-lg"
                            />
                            <span className="font-mono text-2xl font-bold text-text-primary tracking-tight">DEVISE</span>
                        </div>
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-sm font-mono text-text-secondary hover:text-flame transition-colors"
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button
                            variant="default"
                            className="rounded-none hidden md:inline-flex bg-flame hover:bg-flame-dark font-mono"
                        >
                            GET STARTED <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-background-elevated border-white/[0.08]">
                                <nav className="flex flex-col gap-6 mt-6">
                                    {navigationItems.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="text-sm font-mono text-text-secondary hover:text-flame transition-colors"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                    <Button className="cursor-pointer rounded-none bg-flame hover:bg-flame-dark font-mono">
                                        GET STARTED <ArrowRight className="ml-1 w-4 h-4" />
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            <main>
                <section className="container py-24">
                    <div className="flex flex-col items-center text-center">
                        <motion.h1
                            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight text-text-primary"
                        >
                            {titleWords.map((text, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.6
                                    }}
                                    className="inline-block mx-2 md:mx-4"
                                >
                                    {text}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="mx-auto mt-8 max-w-2xl text-xl text-text-secondary font-mono"
                        >
                            Master algorithmic trading with AI-guided strategy building, multi-stage validation,
                            and emotion detection. We ensure you're ready before risking real money.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                            className="mt-12 flex flex-wrap justify-center gap-6"
                        >
                            {labels.map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 1.8 + (index * 0.15),
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10
                                    }}
                                    className="flex items-center gap-2 px-6"
                                >
                                    <feature.icon className="h-5 w-5 text-flame" />
                                    <span className="text-sm font-mono text-text-secondary">{feature.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 2.4,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                        >
                            <Link to="/builder">
                                <Button
                                    size="lg"
                                    className="cursor-pointer rounded-none mt-12 bg-flame hover:bg-flame-dark font-mono shadow-lg shadow-flame/20 hover:shadow-xl hover:shadow-flame/30"
                                >
                                    START BUILDING STRATEGIES <ArrowRight className="ml-1 w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </main>
        </div >
    );
}
