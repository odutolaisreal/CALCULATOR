import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Wisdom Game Show",
  description: "Terms of service for Wisdom Game Show.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-[var(--color-text-muted)] mb-12">
          Last updated: February 2025
        </p>

        <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-8">
          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Wisdom Game Show platform, you agree to
              be bound by these Terms of Service. If you do not agree, please do
              not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age and have the legal capacity
              to enter into these terms. Participation is subject to
              eligibility requirements as specified for each game or
              competition.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              3. Game Rules
            </h2>
            <p>
              Players must purchase a PIN to participate. Passing Stage 1 and
              Stage 2 qualifies you for potential selection for the Live Show.
              All game rules, scoring, and prize distribution are at our sole
              discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              4. Payment and Refunds
            </h2>
            <p>
              PIN purchases are non-refundable except where required by law.
              We reserve the right to modify pricing with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              5. Prohibited Conduct
            </h2>
            <p>
              You agree not to cheat, use automated tools, share answers, or
              otherwise undermine the fairness of the game. Violations may
              result in disqualification and account termination.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any
              indirect, incidental, or consequential damages arising from your
              use of our platform.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl text-[var(--color-text)] mb-4">
              7. Contact
            </h2>
            <p>
              For questions about these terms, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
