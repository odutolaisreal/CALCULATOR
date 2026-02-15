"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-primary mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display font-extrabold text-4xl text-[var(--color-text)] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-12">
            Have a question or need support? We&apos;d love to hear from you.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
              <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-text)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-text)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[var(--color-text)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-text)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--color-text)] mb-2">
                  Email
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  support@wisdomshow.com.ng
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--color-text)] mb-2">
                  Location
                </h3>
                <p className="text-[var(--color-text-muted)]">Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
