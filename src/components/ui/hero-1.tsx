"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
    eyebrow?: string
    title: string
    subtitle: string
    ctaLabel?: string
    ctaHref?: string
}

export function Hero({
    eyebrow = "Innovate Without Limits",
    title,
    subtitle,
    ctaLabel = "Explore Now",
    ctaHref = "#",
}: HeroProps) {
    return (
        <section
            id="hero"
            className="flame-glow relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-background-base
      rounded-b-xl"
        >
            {/* Grid BG */}
            <div
                className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            />

            {/* Radial Accent - Cinematic glow */}
            <div
                className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] bg-background-base
        bg-[radial-gradient(closest-side,#212223_82%,rgba(254,127,45,0.1))] 
        animate-fade-up"
            />

            {/* Eyebrow */}
            {eyebrow && (
                <a href="#" className="group inline-block">
                    <span
                        className="text-sm text-text-secondary font-medium mx-auto px-5 py-2 
            bg-background-card/50 backdrop-blur-sm
            border border-white/[0.08]
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center
            transition-all duration-300 hover:border-flame/30 hover:bg-background-card/70"
                    >
                        {eyebrow}
                        <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-flame" />
                    </span>
                </a>
            )}

            {/* Title */}
            <h1
                className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-text-primary from-30% to-text-secondary
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
            >
                {title}
            </h1>

            {/* Subtitle */}
            <p
                className="animate-fade-in mb-12 -translate-y-4 text-balance 
        text-lg tracking-tight text-text-secondary
        opacity-0 md:text-xl max-w-3xl mx-auto"
            >
                {subtitle}
            </p>

            {/* CTA */}
            {ctaLabel && (
                <div className="flex justify-center">
                    <Button
                        asChild
                        className="mt-[-20px] w-fit md:w-52 z-20 tracking-tighter text-center text-lg
            bg-flame hover:bg-flame-dark transition-all duration-200
            shadow-lg shadow-flame/20 hover:shadow-xl hover:shadow-flame/30"
                    >
                        <a href={ctaHref}>{ctaLabel}</a>
                    </Button>
                </div>
            )}

            {/* Bottom Fade */}
            <div
                className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,#212223_10%,transparent)]"
            />
        </section>
    )
}
