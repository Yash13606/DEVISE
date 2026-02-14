"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
// @ts-ignore
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
    name: string;
    price: string;
    yearlyPrice: string;
    period: string;
    features: string[];
    description: string;
    buttonText: string;
    href: string;
    isPopular: boolean;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
    className?: string;
}

export function Pricing({
    plans,
    title = "Simple, Transparent Pricing",
    description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
    className,
}: PricingProps) {
    const [isMonthly, setIsMonthly] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const switchRef = useRef<HTMLButtonElement>(null);

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked);
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: [
                    "#FE7F2D",
                    "#E56F24",
                    "#FF8C42",
                    "#FFA05C",
                ],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
            });
        }
    };

    return (
        <div className={cn("container py-20 bg-background-base", className)} id="pricing">
            <div className="text-center space-y-6 mb-16 max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold font-mono tracking-tight sm:text-5xl text-text-primary">
                    {title}
                </h2>
                <p className="text-text-secondary text-base md:text-lg whitespace-pre-line font-mono leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex justify-center items-center gap-4 mb-12">
                <span className="font-semibold font-mono text-text-secondary text-sm md:text-base">Monthly</span>
                <Label>
                    <Switch
                        ref={switchRef as any}
                        checked={!isMonthly}
                        onCheckedChange={handleToggle}
                        className="relative"
                    />
                </Label>
                <span className="font-semibold font-mono text-text-secondary text-sm md:text-base">
                    Annual <span className="text-flame">(Save 20%)</span>
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={
                            isDesktop
                                ? {
                                    y: plan.isPopular ? -20 : 0,
                                    opacity: 1,
                                    scale: plan.isPopular ? 1.05 : 1.0,
                                }
                                : { y: 0, opacity: 1 }
                        }
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            delay: index * 0.2,
                        }}
                        className={cn(
                            "rounded-2xl border p-8 bg-background-card flex flex-col relative",
                            plan.isPopular ? "border-flame border-2 shadow-elevated" : "border-white/[0.08]",
                            plan.isPopular && "z-10"
                        )}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 right-0 bg-flame py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                                <Star className="text-white h-4 w-4 fill-current" />
                                <span className="text-white text-sm font-mono font-semibold">
                                    Popular
                                </span>
                            </div>
                        )}
                        <div className="flex-1 flex flex-col">
                            <p className="text-base font-semibold font-mono text-text-secondary uppercase tracking-wider text-center">
                                {plan.name}
                            </p>
                            <div className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-text-primary font-mono">
                                    <NumberFlow
                                        value={
                                            isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                                        }
                                        format={{
                                            style: "currency",
                                            currency: "INR",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }}
                                        transformTiming={{
                                            duration: 500,
                                            easing: "ease-out" as any,
                                        }}
                                        willChange
                                        className="tabular-nums"
                                    />
                                </span>
                                {plan.period !== "one-time" && (
                                    <span className="text-sm font-semibold font-mono leading-6 tracking-wide text-text-muted">
                                        / {plan.period}
                                    </span>
                                )}
                            </div>

                            <p className="text-xs leading-5 text-text-muted font-mono mt-2 text-center">
                                {isMonthly ? "billed monthly" : "billed annually"}
                            </p>

                            <ul className="mt-8 gap-3 flex flex-col">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-flame mt-0.5 flex-shrink-0" />
                                        <span className="text-text-secondary font-mono text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="w-full my-6 border-white/[0.08]" />

                            <a
                                href={plan.href}
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                    }),
                                    "group relative w-full gap-2 overflow-hidden text-base font-semibold font-mono tracking-tight",
                                    "transform-gpu ring-offset-current transition-all duration-300 ease-out",
                                    "hover:ring-2 hover:ring-flame hover:ring-offset-1",
                                    plan.isPopular
                                        ? "bg-flame text-white hover:bg-flame-dark border-flame"
                                        : "bg-background-card text-text-primary hover:bg-flame hover:text-white border-white/[0.08]"
                                )}
                            >
                                {plan.buttonText}
                            </a>
                            <p className="mt-6 text-xs leading-5 text-text-muted font-mono text-center">
                                {plan.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
