"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    title: "Buy Your Gear PRO",
    desc: "Unlock premium features and advanced rewards",
    icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    color: "blue",
    price: "₦9.99",
    cta: "Upgrade Now",
    variant: "price",
  },
  {
    title: "Ace the Character Quiz",
    desc: "Test your biblical knowledge and earn rewards",
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    color: "purple",
    quiz: "Bible Heroes",
    cta: "Start Quiz",
    variant: "quiz",
  },
  {
    title: "Score 5/5 to Qualify",
    desc: "Perfect scores unlock special bonuses",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "yellow",
    score: "5/5",
    cta: "Claim Reward",
    variant: "score",
  },
  {
    title: "Win Big on Saturday",
    desc: "Weekly live challenges with amazing prizes",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    color: "green",
    badge: "LIVE NOW",
    cta: "Grand Challenge",
    variant: "live",
  },
];

const colorClasses: Record<string, string> = {
  blue: "from-blue-100 to-blue-200 text-primary",
  purple: "from-purple-100 to-purple-200 text-secondary",
  yellow: "from-amber-100 to-amber-200 text-amber-600",
  green: "from-emerald-100 to-emerald-200 text-accent",
};

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it works bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 -mt-4"
        >
          <div className="bg-gradient-to-r from-primary to-secondary text-white py-6 px-8 rounded-2xl text-center">
            <h2 className="font-display font-bold text-2xl mb-1">How It Works</h2>
            <p className="opacity-90">Read • Learn • Earn • Redeem</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="h-full bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[feature.color]} flex items-center justify-center mb-6`}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-6">
                  {feature.desc}
                </p>
                <div className="bg-[var(--color-bg)] rounded-2xl p-5">
                  {feature.variant === "price" && (
                    <>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        Premium Access
                      </span>
                      <div className="text-2xl font-bold my-2">
                        {feature.price}
                      </div>
                      <button className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                        {feature.cta}
                      </button>
                    </>
                  )}
                  {feature.variant === "quiz" && (
                    <>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        Next Quiz
                      </span>
                      <div className="text-xl font-bold my-2">
                        {feature.quiz}
                      </div>
                      <button className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors">
                        {feature.cta}
                      </button>
                    </>
                  )}
                  {feature.variant === "score" && (
                    <>
                      <div className="text-4xl font-extrabold text-amber-600 text-center my-2">
                        {feature.score}
                      </div>
                      <button className="w-full py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors">
                        {feature.cta}
                      </button>
                    </>
                  )}
                  {feature.variant === "live" && (
                    <>
                      <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-2">
                        {feature.badge}
                      </span>
                      <div className="font-semibold">{feature.cta}</div>
                    </>
                  )}
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
