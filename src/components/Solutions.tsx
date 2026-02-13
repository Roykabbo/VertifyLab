"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Stethoscope, Briefcase } from "lucide-react";

const solutions = [
    {
        icon: Building2,
        niche: "Real Estate",
        problem: "Missed calls from leads during showings.",
        solution: "24/7 localized lead capture and scheduling.",
    },
    {
        icon: ShoppingBag,
        niche: "E-commerce",
        problem: "High support volume for simple queries.",
        solution: "Instant answers for shipping, returns, and product info.",
    },
    {
        icon: Stethoscope,
        niche: "Healthcare",
        problem: "Inefficient appointment booking process.",
        solution: "HIPAA-compliant intake and calendar sync.",
    },
    {
        icon: Briefcase,
        niche: "Legal & Consulting",
        problem: "Time wasted on unqualified prospects.",
        solution: "Smart qualification scripts before you hop on a call.",
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        Tailored Solutions
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We understand the unique challenges of your industry. Our bots are pre-trained on your niche&apos;s specific needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={item.niche}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.niche}</h3>
                            <div className="space-y-2">
                                <div className="text-sm text-muted-foreground">
                                    <span className="text-red-400 font-medium">Problem:</span> {item.problem}
                                </div>
                                <div className="text-sm text-foreground">
                                    <span className="text-green-400 font-medium">Solution:</span> {item.solution}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
