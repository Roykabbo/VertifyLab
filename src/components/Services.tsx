"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MessageSquare, BarChart3, Globe, Shield } from "lucide-react";

const services = [
    {
        icon: MessageSquare,
        title: "Intelligent Intake",
        description: "Qualify leads with natural language conversations, not static forms.",
    },
    {
        icon: Calendar,
        title: "Auto-Scheduling",
        description: "Direct bi-directional sync with your calendar (Google, Outlook, Calendly).",
    },
    {
        icon: BarChart3,
        title: "Lead Generation",
        description: "Capture contact info and push directly to your CRM.",
    },
    {
        icon: Globe,
        title: "24/7 Availability",
        description: "Never miss a lead, day or night, in any time zone.",
    },
    {
        icon: Shield,
        title: "Secure & Compliant",
        description: "Enterprise-grade security for your data and your customers&apos;.",
    },
    {
        icon: CheckCircle2,
        title: "Custom Training",
        description: "Trained on your specific knowledge base, FAQs, and brand voice.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        Everything You Need
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A complete suite of tools to automate your sales pipeline.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-7 h-7 text-foreground" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
