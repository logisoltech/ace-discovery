import Link from "next/link";

const link =
  "font-medium text-blue-400 underline decoration-blue-400/80 underline-offset-2 hover:text-blue-300";

function Section({ title, children }) {
  return (
    <>
      <h2
        className="mt-10 mb-4 rounded-lg px-4 py-3 text-lg font-bold leading-snug text-white sm:text-xl"
        style={{ backgroundColor: "#0e5599" }}
      >
        {title}
      </h2>
      {children}
    </>
  );
}

export default function InsightArticleCaseguildPartnershipContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        For immediate release
      </p>
      <p className="mb-6 text-sm text-white/75">Richardson, TX · March 21, 2025</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          Right Discovery
        </Link>{" "}
        teams with{" "}
        <a
          href="https://www.caseguild.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          CaseGuild
        </a>
        , an AI-driven evidence reasoning platform, to pair advanced review automation
        with hands-on litigation support—so firms and legal departments can move faster,
        tighten compliance, and protect sensitive data.
      </p>
      <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg">
        Together the stack targets complex investigations, early case assessment, and
        high-stakes discovery without surrendering custody of client environments.
      </p>

      <Section title="A smarter, more secure approach to legal review">
        <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
          Skyrocketing spend, exploding corpora, and multiplying regulators demand more
          than armies of eyes on screens. Joint workflows deliver:
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
          <li>
            <strong className="text-white">Clear, defensible insights</strong> — AI
            routines that improve transparency and accelerate defensible calls.
          </li>
          <li>
            <strong className="text-white">AI-driven case preparation</strong> — prompt
            libraries and question generation tuned to matter facts.
          </li>
          <li>
            <strong className="text-white">Secure by design</strong> — matter data
            stays in client-controlled cloud estates.
          </li>
          <li>
            <strong className="text-white">Flexible uploads</strong> — ingest without
            ceding governance of sensitive subsets.
          </li>
          <li>
            <strong className="text-white">Usage-based pricing</strong> — predictable
            unit economics aligned to client billing narratives.
          </li>
        </ul>
        <blockquote className="mb-6 border-l-4 border-[#0e5599] pl-4 text-base italic text-white/90 sm:text-lg">
          &quot;Legal teams need a better way to manage the ever-growing volume of case
          data while keeping costs under control…&quot;
          <span className="mt-2 block text-sm not-italic text-white/80">
            —{" "}
            <a href="mailto:solutions@rightdiscovery.com" className={link}>
              Kevin M. Clark
            </a>
            , CEO
          </span>
        </blockquote>
      </Section>

      <Section title="Cutting-edge AI for legal professionals">
        <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
          CaseGuild&apos;s builders bring enterprise DNA from platforms counsel already
          recognize. The product mirrors how strong paralegals and partners actually
          work—only at machine scale.
        </p>
        <p className="mb-3 font-semibold text-white">How CaseGuild transforms review</p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-base text-white/95 sm:text-lg">
          <li>
            <strong className="text-white">Instant matter fluency</strong> — timelines,
            summaries, and suggested follow-ups from day-one drops.
          </li>
          <li>
            <strong className="text-white">Lean investigation teams</strong> — one
            senior reviewer can pressure-test enormous populations in hours, not
            weeks.
          </li>
          <li>
            <strong className="text-white">ECA without platform lock-in</strong> —
            exportable work product that travels to downstream hosting stacks.
          </li>
          <li>
            <strong className="text-white">Enterprise rigor</strong> — security
            patterns informed by Fortune-grade engineering experience.
          </li>
        </ul>
        <blockquote className="mb-6 border-l-4 border-[#0e5599] pl-4 text-base italic text-white/90 sm:text-lg">
          &quot;CaseGuild was designed to help legal teams win—faster, more efficiently,
          and with deeper insights.&quot;
          <span className="mt-2 block text-sm not-italic text-white/80">
            — Danny Thankachan, Head of Partnerships, CaseGuild
          </span>
        </blockquote>
      </Section>

      <Section title="Partnership that compounds client value">
        <p className="mb-10 text-base leading-relaxed text-white/95 sm:text-lg">
          Right Discovery&apos;s consulting, forensics, and managed services layers plug
          into CaseGuild so counsel can fuse narrative judgment with statistical muscle—
          closing the loop from raw data to court-ready strategy.
        </p>
      </Section>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> CaseGuild, early case
        evaluation, AI review,{" "}
        <Link href="/" className={link}>
          Right Discovery
        </Link>
        , partnerships, legal technology
      </p>
    </article>
  );
}
