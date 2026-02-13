"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
    role: "bot" | "user";
    content: string;
}

const initialMessages: Message[] = [
    { role: "bot", content: "Hi there! 👋 I'm the VertifyLab assistant." },
    { role: "bot", content: "How can I help you automate your sales today?" },
];

export default function ChatWidgetMockup() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isTyping, setIsTyping] = useState(false);

    const quickReplies = [
        "Pricing?",
        "How does it work?",
        "Book a demo",
        "Integration options"
    ];

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen, isTyping]);

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMessage: Message = { role: "user", content: text };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            let response = "";
            switch (text.toLowerCase()) {
                case "pricing?":
                    response = "Our pricing starts at $499/mo for the Starter plan. It includes 1 AI Chatbot and Basic Lead Intake.";
                    break;
                case "how does it work?":
                    response = "We embed a smart AI agent on your site that qualifies leads 24/7 and books meetings directly to your calendar.";
                    break;
                case "book a demo":
                    response = "Great! I can help you with that. Please click the 'Book a Demo' button in the hero section above.";
                    break;
                case "integration options":
                    response = "We integrate with HubSpot, Salesforce, Pipedrive, GoHighLevel, and Zapier for custom workflows.";
                    break;
                default:
                    const botResponses = [
                        "That sounds interesting! Tell me more about your agency.",
                        "We can definitely help with that. Our intaker is perfect for this use case.",
                        "Would you like to schedule a demo to see it in action?",
                        "I can book a meeting for you right now.",
                    ];
                    response = botResponses[Math.floor(Math.random() * botResponses.length)];
            }

            setMessages((prev) => [
                ...prev,
                { role: "bot", content: response },
            ]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-20 right-4 w-[calc(100vw-32px)] md:w-[380px] h-[60vh] md:h-[600px] bg-background border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">VertifyLab Bot</h3>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-muted-foreground">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-white/10 text-foreground rounded-tl-none border border-white/5"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {/* Quick Replies embedded in chat */}
                            {!isTyping && messages[messages.length - 1]?.role === "bot" && (
                                <div className="flex flex-wrap gap-2 mt-2 ml-1">
                                    {quickReplies.map((reply) => (
                                        <button
                                            key={reply}
                                            onClick={() => handleSend(reply)}
                                            className="px-3 py-1.5 text-xs font-medium bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition-colors text-primary hover:text-primary-foreground"
                                        >
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    variant="ghost"
                                    className="h-8 w-8 p-0"
                                    disabled={!inputValue.trim()}
                                >
                                    <Send className="w-4 h-4" />
                                    <span className="sr-only">Send</span>
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center z-50 hover:bg-primary/90 transition-colors"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageSquare className="w-6 h-6" />
                )}
            </motion.button>
        </>
    );
}
