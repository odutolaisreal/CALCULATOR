"use client";

import { motion } from "framer-motion";

/**
 * Animated biblical-themed decorative elements: dove, scroll, open book, star.
 * Add relatability and visual warmth to the Wisdom Show brand.
 */
export function BiblicalCharacters() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[2]">
      {/* Dove of Peace - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-[12%] right-[6%] w-14 h-14 md:w-20 md:h-20"
      >
        <motion.svg
          viewBox="0 0 64 64"
          className="w-full h-full text-primary/25"
          animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="currentColor"
            d="M32 12c-3 0-6 1-8 4-1-1-3-2-5-2-5 0-9 4-9 9 0 3 2 6 4 7-1 2-1 4-1 6 0 3 2 6 5 6 1 0 2 0 3-1v10c0 2 2 3 4 3s4-1 4-3v-8c2 1 3 1 5 1 4 0 8-3 8-8 0-3-1-5-2-7 2-1 4-4 4-7 0-5-4-9-9-9-2 0-4 1-5 2-2-3-5-4-8-4z"
          />
        </motion.svg>
      </motion.div>

      {/* Open Book - bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-[20%] left-[4%] w-12 h-12 md:w-16 md:h-16"
      >
        <motion.svg
          viewBox="0 0 48 48"
          className="w-full h-full text-secondary/20"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="currentColor"
            d="M24 6C14 6 6 12 6 20v18h6V20c0-5 4-8 12-8s12 3 12 8v18h6V20c0-8-8-14-18-14zm0 6c4 0 8 2 9 5H15c1-3 5-5 9-5z"
          />
        </motion.svg>
      </motion.div>

      {/* Scroll - top left */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[20%] left-[8%] w-10 h-10 md:w-14 md:h-14"
      >
        <motion.svg
          viewBox="0 0 40 40"
          className="w-full h-full text-amber-500/20"
          animate={{ y: [0, 5, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="currentColor" d="M8 4h24v32H8V4zm4 4v24h16V8H12z" />
        </motion.svg>
      </motion.div>

      {/* Star of Bethlehem - bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-[30%] right-[10%] w-8 h-8 md:w-10 md:h-10"
      >
        <motion.svg
          viewBox="0 0 40 40"
          className="w-full h-full text-amber-400/25"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path
            fill="currentColor"
            d="M20 2l5 14h14l-11 8 4 14-12-9-12 9 4-14-11-8h14z"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
