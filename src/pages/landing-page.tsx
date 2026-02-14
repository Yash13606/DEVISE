import { MynaHero } from "@/components/ui/myna-hero"
import { UnifiedFeatures } from "@/components/ui/unified-features"
import { HeroPulseBeams } from "@/components/ui/hero-pulse-beams"
import { Pricing } from "@/components/ui/pricing"
import { FAQ } from "@/components/ui/faq"
import { FooterSection } from "@/components/ui/footer-section"

const tradingPlans = [
    {
        name: "LEARNER",
        price: "2999",
        yearlyPrice: "2399",
        period: "month",
        features: [
            "Up to 3 active strategies",
            "Basic backtesting (1 year data)",
            "Paper trading only",
            "Community support",
            "Basic performance analytics",
            "Email alerts",
        ],
        description: "Perfect for beginners learning algorithmic trading",
        buttonText: "Start Learning",
        href: "#signup",
        isPopular: false,
    },
    {
        name: "TRADER",
        price: "9999",
        yearlyPrice: "7999",
        period: "month",
        features: [
            "Unlimited strategies",
            "Advanced backtesting (5+ years)",
            "Live trading integration",
            "Multi-stage validation system",
            "Emotion detection AI",
            "Real-time market data",
            "Priority support (24h response)",
            "Advanced analytics dashboard",
            "Risk management tools",
        ],
        description: "Ideal for serious traders ready to go live",
        buttonText: "Start Trading",
        href: "#signup",
        isPopular: true,
    },
    {
        name: "PROFESSIONAL",
        price: "24999",
        yearlyPrice: "19999",
        period: "month",
        features: [
            "Everything in Trader",
            "Multiple broker integrations",
            "Custom strategy development",
            "Dedicated account manager",
            "1-hour support response",
            "White-label options",
            "API access for automation",
            "Custom validation rules",
            "Advanced risk controls",
            "Portfolio management",
        ],
        description: "For professional traders and institutions",
        buttonText: "Contact Sales",
        href: "#contact",
        isPopular: false,
    },
];

import { Header } from "@/components/ui/header-2"

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background-base">
            <Header />
            <MynaHero />
            <UnifiedFeatures />
            <HeroPulseBeams />
            <Pricing
                plans={tradingPlans}
                title="Choose Your Trading Plan"
                description="All plans include AI-powered strategy building, comprehensive validation, and safety-first approach.
Start with paper trading and upgrade when you're ready for live markets."
                className="mt-32"
            />
            <FAQ />
            <FooterSection />
        </div>
    )
}
