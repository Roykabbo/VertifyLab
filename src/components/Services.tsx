"use client";

import { motion } from "framer-motion";
import { Clock, Brain, CalendarCheck, Send, Puzzle, Fingerprint } from "lucide-react";

const services = [
    {
        icon: Clock,
        title: "Always-On Lead Capture",
        description: "Stop losing revenue to after-hours inquiries. Your AI assistant operates 24/7, providing instant responses to website visitors and capturing valuable contact information while your competitors are asleep.",
    },
    {
        icon: Brain,
        title: "Intelligent Lead Qualification",
        description: "Ditch the low-converting static forms. Our AI engages prospects in natural conversations, asking targeted discovery questions to automatically qualify leads and filter out time-wasters before they ever reach your team.",
    },
    {
        icon: CalendarCheck,
        title: "Zero-Friction Scheduling",
        description: "Eliminate the back-and-forth email tag. Qualified leads can book meetings directly on your calendar within the chat, ensuring you wake up to a packed schedule of high-value calls.",
    },
    {
        icon: Send,
        title: "Proactive Outreach & Follow-ups",
        description: "Go beyond just answering inbound questions. Your AI can proactively initiate conversations with new visitors, send text and email follow-ups to warm leads, and gently guide potential customers through your specific sales funnel.",
    },
    {
        icon: Puzzle,
        title: "Seamless Tech Integration",
        description: "Your new assistant plays perfectly with your existing workflow. From sending instant email notifications via Gmail to pushing qualified lead data directly into your favorite CRM, it completely eliminates manual data entry.",
    },
    {
        icon: Fingerprint,
        title: "Tailored to Your Brand Voice",
        description: "This is not a generic, robotic chatbot. We custom-train the AI exclusively on your business data, website, and FAQs. It perfectly mimics your brand's unique tone, ensuring every interaction feels personal, accurate, and highly professional.",
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
                        Turn Traffic Into Booked Meetings.
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        An AI assistant that works 24/7, never takes a sick day, and instantly qualifies every lead that visits your site.
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
