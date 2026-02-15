"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

interface HeroProps {
    onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
    const scrollToSolutions = () => {
        const element = document.getElementById("solutions");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        The Future of Agency Sales
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent"
                >
                    Your 24/7 AI <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Sales Intaker
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    We build intelligent chatbots that handle intake, book meetings, and
                    generate leads automatically. Turn your website into a conversion
                    machine.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="group" onClick={onContactClick}>
                        Book a Demo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" onClick={scrollToSolutions}>
                        View Solutions
                    </Button>
                </motion.div>

                {/* Abstract Bot Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 relative mx-auto w-full max-w-4xl min-h-[400px] md:min-h-0 md:aspect-video rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center p-4 md:p-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />
                    <div className="relative z-20 text-center w-full">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/20">
                            <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className="space-y-4 max-w-md mx-auto w-full px-4">
                            <div className="p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 text-left w-fit max-w-[90%] mx-auto md:mx-0">
                                <p className="text-xs md:text-sm text-muted-foreground mb-1">User</p>
                                <p className="text-sm md:text-base">Hi, I&apos;m interested in automating my sales process.</p>
                            </div>
                            <div className="p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20 text-left w-fit max-w-[90%] ml-auto md:ml-8">
                                <p className="text-xs md:text-sm text-primary mb-1">VertifyLab Bot</p>
                                <p className="text-sm md:text-base">I can definitely help with that! I can handle intake, scheduling, and Q&A. Would you like to see a demo?</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
