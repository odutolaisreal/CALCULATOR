"use client";

import Link from "next/link";
import Image from "next/image";
import { BiblicalCharacters } from "./BiblicalCharacters";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface HeroProps {
  /** Path to your phone mockup image (e.g. /phone-mockup.png). Place image in public/ folder. */
  phoneMockupSrc?: string | null;
}

function PhoneMockup({ src }: { src?: string | null }) {
  const [imgError, setImgError] = useState(false);
  const useImage = src && !imgError;

  return (
    <motion.div
      whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
      className="relative w-72 max-w-[280px] flex justify-center"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {useImage ? (
        <Image
          src={src}
          alt="Wisdom Show app on phone"
          width={280}
          height={568}
          className="object-contain drop-shadow-2xl"
          style={{ maxHeight: "60vh" }}
          sizes="(max-width: 768px) 240px, 280px"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="w-72 aspect-[9/19] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.25rem] p-3 shadow-2xl"
          style={{ boxShadow: "0 50px 100px -20px rgba(0,0,0,0.3)" }}
        >
          <div className="w-full h-full bg-gradient-to-b from-[#F8F9FC] to-[#E8EDFF] rounded-[1.75rem] p-5 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold">Hello, Player</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-2xl mb-4">
              <span className="text-xs opacity-90">Amount Saved</span>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">₦568</span>
                <span className="text-emerald-400">↑</span>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1.5 text-xs font-semibold bg-primary text-white rounded-lg">FOR GOALS</span>
              <span className="px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)] rounded-lg">EMERGENCY</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <span className="text-xs text-[var(--color-text-muted)]">Income</span>
                <div className="font-bold">₦1,152</div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <span className="text-xs text-[var(--color-text-muted)]">Expense</span>
                <div className="font-bold">₦948</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function Hero({ phoneMockupSrc = "/phone-mockup.png" }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const [introDone, setIntroDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIntroDone(true),
    });

    tl.fromTo(
      overlayRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 1.2, delay: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F4FF] via-[#F8F9FC] to-[#E8EDFF] pt-20"
    >
      {/* Cinematic overlay - fades out on load */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[60] bg-dark pointer-events-none"
        style={{ opacity: 1 }}
      />

      {/* Biblical animated decorative elements */}
      <BiblicalCharacters />

      {/* Parallax organic shapes */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[80px] animate-float" />
        <div className="absolute bottom-[15%] -right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-secondary/25 to-purple-400/20 blur-[70px] animate-float" style={{ animationDirection: "reverse" }} />
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-6"
        >
          LIVE SHOW EVERY SATURDAY →
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--color-text)] mb-6"
        >
          Biblical Wisdom.
          <br />
          Real Rewards.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed"
        >
          Turn your knowledge into meaningful rewards. Answer trivia questions,
          qualify for our live game show, and win cash prizes up to ₦1,000,000.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-2xl shadow-lg shadow-primary/35 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            Start Playing for Free →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={introDone ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8 text-[var(--color-text-muted)]"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-5 h-5 text-amber-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-sm">4.9 rating (2,500+ players)</span>
        </motion.div>

        {/* Phone mockup - uses your image when placed in public/phone-mockup.png */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex justify-center"
        >
          <PhoneMockup src={phoneMockupSrc} />
        </motion.div>
      </motion.div>
    </section>
  );
}
