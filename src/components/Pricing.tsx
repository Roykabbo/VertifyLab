"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingProps {
    onContactClick: () => void;
}

const plans = [
    {
        name: "Starter",
        price: "$499",
        period: "/month",
        description: "Perfect for small agencies just getting started.",
        features: [
            "1 AI Chatbot",
            "Basic Lead Intake",
            "Email Notifications",
            "Standard Support",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Growth",
        price: "$999",
        period: "/month",
        description: "For scaling agencies needing advanced automation.",
        features: [
            "3 AI Chatbots",
            "Calendar Integration",
            "CRM Sync (HubSpot, Salesforce)",
            "Priority Support",
            "Custom Training",
        ],
        cta: "Scale Now",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Full-service solution for large organizations.",
        features: [
            "Unlimited Chatbots",
            "White-label Solution",
            "Dedicated Account Manager",
            "Custom API Integration",
            "SLA Support",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing({ onContactClick }: PricingProps) {
    return (
        <section id="pricing" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Choose the plan that fits your agency&apos;s growth stage.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border flex flex-col ${plan.popular
                                ? "bg-white/10 border-primary shadow-2xl shadow-primary/10"
                                : "bg-white/5 border-white/10"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">{plan.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2 text-sm">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className="w-full"
                                onClick={onContactClick}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
