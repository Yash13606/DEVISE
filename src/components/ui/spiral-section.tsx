'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'
import { TrendingUp, Shield, Zap } from 'lucide-react'

const SpiralSection = () => {
    const [textVisible, setTextVisible] = useState(false)

    // Fade in text after animation loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setTextVisible(true)
        }, 800)

        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="relative w-full py-24 overflow-hidden bg-background-base border-y border-white/[0.08]">
            {/* Spiral Animation Background - Contained */}
            <div className="absolute inset-0 opacity-30">
                <SpiralAnimation />
            </div>

            {/* Content Container */}
            <div className="container relative z-10 mx-auto px-4">
                <div
                    className={`
            text-center space-y-8 max-w-5xl mx-auto
            transition-all duration-1000 ease-out
            ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
                >
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight text-text-primary">
                            POWERED BY ADVANCED AI
                        </h2>
                        <p className="text-lg md:text-xl font-mono text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Our institutional-grade algorithms analyze market patterns in real-time,
                            ensuring every trade is backed by data-driven intelligence.
                        </p>
                    </div>

                    {/* Feature Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background-card border border-white/[0.08] hover:border-flame/50 transition-colors">
                            <div className="p-3 rounded-full bg-flame/10">
                                <TrendingUp className="w-8 h-8 text-flame" />
                            </div>
                            <h3 className="text-3xl font-bold font-mono text-text-primary">99.9%</h3>
                            <p className="text-sm font-mono text-text-secondary text-center">
                                Uptime Reliability
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background-card border border-white/[0.08] hover:border-flame/50 transition-colors">
                            <div className="p-3 rounded-full bg-flame/10">
                                <Zap className="w-8 h-8 text-flame" />
                            </div>
                            <h3 className="text-3xl font-bold font-mono text-text-primary">&lt;10ms</h3>
                            <p className="text-sm font-mono text-text-secondary text-center">
                                Execution Speed
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-background-card border border-white/[0.08] hover:border-flame/50 transition-colors">
                            <div className="p-3 rounded-full bg-flame/10">
                                <Shield className="w-8 h-8 text-flame" />
                            </div>
                            <h3 className="text-3xl font-bold font-mono text-text-primary">6-Stage</h3>
                            <p className="text-sm font-mono text-text-secondary text-center">
                                Validation System
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                        <a
                            href="#pricing"
                            className="
                inline-flex items-center gap-2 px-8 py-4 
                bg-flame hover:bg-flame-dark 
                text-white font-mono font-semibold text-base
                transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-flame/20
                rounded-none
              "
                        >
                            VIEW PRICING PLANS
                            <TrendingUp className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { SpiralSection }
