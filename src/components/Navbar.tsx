"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleContactClick = () => {
        setIsMenuOpen(false);
        onContactClick();
    };

    const navLinks = ["Solutions", "Services", "Pricing", "FAQ"];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-white/5"
        >
            <Link href="/" className="text-2xl font-bold font-display tracking-tight hover:text-primary transition-colors z-50">
                VertifyLab
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
                <Button onClick={onContactClick} size="sm">
                    Contact Us
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 right-0 bg-background border-b border-white/10 p-6 pt-20 flex flex-col gap-4 md:hidden shadow-2xl"
                    >
                        {navLinks.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-lg font-medium text-left py-2 border-b border-white/5"
                            >
                                {item}
                            </button>
                        ))}
                        <Button onClick={handleContactClick} className="w-full mt-4">
                            Contact Us
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
