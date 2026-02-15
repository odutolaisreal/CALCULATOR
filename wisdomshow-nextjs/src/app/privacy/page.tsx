import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Wisdom Game Show",
  description: "Privacy policy for Wisdom Game Show.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-primary mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="font-display font-extrabold text-4xl text-[var(--color-text)] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[var(--color-text-muted)] mb-12">
          Last updated: February 2025
        </p>

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-8">
          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly, such as when you
              register, purchase a PIN, participate in quizzes, or contact us.
              This may include your name, email address, phone number, and
              payment information.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to operate the Wisdom Game Show,
              process transactions, send you updates about the game, improve our
              services, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share information
              with service providers who assist in operating our platform, and
              when required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              5. Your Rights
            </h2>
            <p>
              You may access, correct, or delete your personal information by
              contacting us. You may also opt out of marketing communications.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              6. Contact Us
            </h2>
            <p>
              For privacy-related questions, please contact us at{" "}
              <Link href="/contact" className="text-primary hover:underline">
                our contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
