"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is Devise and how does it work?",
        answer: "Devise is an AI-powered algorithmic trading platform that helps you build, validate, and deploy trading strategies without writing code. You describe your strategy in plain English, and our AI converts it into a executable algorithm, which you can then backtest and trade with."
    },
    {
        question: "What does the Learner plan include?",
        answer: "The Learner plan is designed for beginners. It includes up to 3 active strategies, basic backtesting with 1 year of historical data, and paper trading capabilities to test your strategies risk-free before using real capital."
    },
    {
        question: "How do the AI tokens work?",
        answer: "Tokens are used to generate strategies with our AI Builder. Each plan comes with a monthly allowance of tokens. Building a strategy consumes tokens based on complexity. You can always purchase top-up packs if you need more."
    },
    {
        question: "Who owns the strategies I build?",
        answer: "You strictly own 100% of the strategies you create on Devise. We do not use your strategies for our own trading, nor do we share them with other users unless you explicitly choose to publish them to the marketplace."
    },
    {
        question: "What markets can I trade?",
        answer: "Currently, Devise supports major global equity markets (US, India), Forex pairs, and major Cryptocurrencies. We are continuously adding support for more exchanges and asset classes."
    },
    {
        question: "Do I need coding knowledge?",
        answer: "No! Devise is built specifically for traders who don't code. Our conversational AI interface allows you to build complex logic, entry/exit conditions, and risk management rules simply by talking to the AI."
    },
    {
        question: "Is there a student discount?",
        answer: "Yes, we offer a 50% discount on the Learner and Trader plans for verified students. Please contact our support team with your student ID to apply."
    },
    {
        question: "Where can I find out more?",
        answer: "You can explore our documentation, join our Discord community of traders, or follow us on social media for the latest updates and trading insights."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background-base relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-flame/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-flame/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-text-primary mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="divide-y divide-white/10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="group">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                            >
                                <span className={cn(
                                    "text-lg font-medium transition-colors duration-200",
                                    openIndex === index ? "text-flame" : "text-text-primary group-hover:text-flame"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 text-text-secondary transition-transform duration-300",
                                        openIndex === index ? "rotate-180 text-flame" : "group-hover:text-flame"
                                    )}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-text-secondary leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
