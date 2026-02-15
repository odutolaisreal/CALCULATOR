"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "What is The Wisdom Game Show?",
    a: "The Wisdom Game Show is a live, interactive quiz game where you qualify for a televised game show by answering questions online. Purchase a PIN, pass two stages, and you could be invited to compete live for cash prizes up to ₦1,000,000.",
  },
  {
    q: "How do I play?",
    a: "Buy a PIN, log in, and start playing. Answer all 5 questions correctly in Stage 1 to proceed to Stage 2. Pass both stages to qualify for the Live Show.",
  },
  {
    q: "How much does it cost to play?",
    a: "Each attempt costs ₦500 for one PIN, which gives you access to both online stages.",
  },
  {
    q: "Do I win money in the online stages?",
    a: "No. The online stages are for qualification only. Passing both stages makes you eligible to be selected for the Live Show, where all cash prizes are won.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-[var(--color-text)] mb-16">
            Common Questions & Answers
          </h2>
        </ScrollReveal>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <motion.div
                layout
                className="border-b border-[var(--color-border)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 text-left font-semibold text-[var(--color-text)] hover:text-primary transition-colors"
                >
                  {faq.q}
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    className="text-2xl text-[var(--color-text-muted)]"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[var(--color-text-muted)] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors">
              See More FAQs
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
