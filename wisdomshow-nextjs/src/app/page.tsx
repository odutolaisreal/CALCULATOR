import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Dashboard />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
