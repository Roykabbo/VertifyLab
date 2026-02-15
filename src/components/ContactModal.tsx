"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to submit form");
            }

            setSubmitted(true);
            // Reset form after delay
            setTimeout(() => {
                setSubmitted(false);
                onClose();
                setFormData({ name: "", email: "", phone: "", company: "", message: "" });
            }, 2000);
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert(`Error: ${error.message || "Something went wrong"}. Please try again.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
                    >
                        <div className="bg-background border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">

                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-10">
                                <div>
                                    <h2 className="text-2xl font-bold font-display">Get in Touch</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Let&apos;s discuss how we can automate your sales.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                                            <Send className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold">Message Sent!</h3>
                                        <p className="text-muted-foreground">
                                            Thanks for reaching out. We'll get back to you shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-medium">Business Details</label>
                                            <input
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                                placeholder="Company Name / Website"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                                placeholder="Tell us about your needs..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full mt-4"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
