"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={0}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                About Us
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6 text-[var(--color-text)]">
                Empowering individuals to grow in wisdom through knowledge and
                rewards.
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                The Wisdom Game Show is a live, interactive quiz experience where
                you test your biblical knowledge, qualify through online stages,
                and compete for cash prizes up to ₦1,000,000 on our televised
                game show.
              </p>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="block">Read & Learn</strong>
                    <span className="text-[var(--color-text-muted)] text-sm">
                      Engage with scripture daily and build your knowledge
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="block">Earn & Redeem</strong>
                    <span className="text-[var(--color-text-muted)] text-sm">
                      Answer correctly, earn points, and redeem rewards
                    </span>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={0.2} direction="right">
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 col-span-2 row-span-2"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
