"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Solutions />
      <Services />
      <Pricing onContactClick={() => setIsContactOpen(true)} />
      <FAQ />
      <Footer />
      <ChatWidget />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
