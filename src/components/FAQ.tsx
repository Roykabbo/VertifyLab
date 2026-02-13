"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does the AI intaker work?",
        answer:
            "Our AI embeds on your website as a chat widget. It engages visitors, answers their questions using your knowledge base, and guides them to book a meeting or leave contact details.",
    },
    {
        question: "Can I customize the chatbot's personality?",
        answer:
            "Absolutely. You can define the tone (formal, friendly, witty), brand voice, and specific instructions on how to handle different types of queries.",
    },
    {
        question: "Does it integrate with my CRM?",
        answer:
            "Yes, we integrate with major CRMs like HubSpot, Salesforce, Pipedrive, and GoHighLevel. We also support Zapier for custom workflows.",
    },
    {
        question: "Is it difficult to set up?",
        answer:
            "Not at all. We provide a simple script tag to add to your website. Configuration takes about 15 minutes via our dashboard.",
    },
    {
        question: "What happens if the AI doesn't know the answer?",
        answer:
            "The AI is trained to gracefully handle unknowns. It can collect the user's information and escalate the query to a human team member via email or Slack.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container px-4 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-lg overflow-hidden bg-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(op => (op === index ? null : index))}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
