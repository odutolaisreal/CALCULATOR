"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-dark to-dark-lighter text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            Ready to Play?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Download now and start your journey to wisdom and rewards
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
              hidden: {},
            }}
          >
            <motion.a
              href="#"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="inline-flex items-center gap-4 px-6 py-4 bg-white text-[var(--color-text)] rounded-2xl font-semibold hover:shadow-xl transition-shadow min-w-[200px]"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 101.7 86.1 101.7 29.1 0 40.2-20.6 89.2-20.6 49.2 0 60.2 20.6 91.7 20.6 33.5 0 65.9-61.8 83.6-102.7 4.9-11.4 17.1-45 17.1-45-45.9-17.5-76.8-60.8-76.8-103.8zm-92.2-150.6c23.4-32.2 18.5-88.6-2.2-114.5-32.6 4.3-66.9 23.2-87.7 52.1-19.1 27.9-15.9 81.8 3.7 109.5 28.5 3.3 61.3-19.5 86.2-47.1z" />
              </svg>
              <div className="text-left">
                <span className="block text-xs uppercase opacity-75">
                  Download on the
                </span>
                <span className="text-lg">App Store</span>
              </div>
            </motion.a>
            <motion.a
              href="#"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="inline-flex items-center gap-4 px-6 py-4 bg-white text-[var(--color-text)] rounded-2xl font-semibold hover:shadow-xl transition-shadow min-w-[200px]"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3-60.1-60.1L47 499z" />
              </svg>
              <div className="text-left">
                <span className="block text-xs uppercase opacity-75">
                  Get it on
                </span>
                <span className="text-lg">Google Play</span>
              </div>
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
