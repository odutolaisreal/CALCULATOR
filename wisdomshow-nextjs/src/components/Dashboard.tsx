"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function Dashboard() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-dark to-dark-lighter text-white overflow-hidden">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4 tracking-tight">
            Your Personal Hub
            <br />
            for Wisdom & Rewards
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-16">
            Track your progress, manage rewards, and grow your spiritual journey
          </p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex justify-between items-center mb-10">
                <span className="text-lg">My Progress</span>
                <span className="text-lg">Dashboard</span>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <span className="text-sm text-white/60 block mb-2">
                    Points Earned
                  </span>
                  <span className="text-4xl font-bold">2,450</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <span className="text-sm text-white/60 block mb-2">
                    Quizzes Passed
                  </span>
                  <span className="text-4xl font-bold">12</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <span className="text-sm text-white/60 block mb-2">
                    Win Streak
                  </span>
                  <span className="text-4xl font-bold">5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  );
}
