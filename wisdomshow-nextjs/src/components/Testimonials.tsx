"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    text: "This app has transformed my daily devotional time. The rewards system keeps me motivated to learn more every day!",
    author: "Sarah M.",
    role: "Active Player",
    gradient: "from-primary to-secondary",
  },
  {
    text: "The live show experience is incredible. I qualified and actually won! The whole process from quiz to stage was seamless.",
    author: "David O.",
    role: "Winner, Season 2",
    gradient: "from-secondary to-purple-400",
  },
  {
    text: "Finally, something that makes Bible study fun and rewarding. My whole family plays together every Saturday!",
    author: "Chinwe A.",
    role: "Family Player",
    gradient: "from-accent to-emerald-400",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-[var(--color-text)] mb-4">
            Loved by Our Community
          </h2>
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-[var(--color-text-muted)]">
              4.9 out of 5 stars (2,500+ reviews)
            </span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="text-[var(--color-text)] mb-6 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient}`}
                  />
                  <div>
                    <strong className="block">{t.author}</strong>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {t.role}
                    </span>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
