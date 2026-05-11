import Link from "next/link";

const link =
  "font-medium text-blue-400 underline decoration-blue-400/80 underline-offset-2 hover:text-blue-300";

export default function InsightArticleIconectIrContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        For immediate release
      </p>
      <p className="mb-6 text-sm text-white/75">Richardson, TX · August 9, 2024</p>

      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        <Link href="/" className={link}>
          Right Discovery
        </Link>{" "}
        selected{" "}
        <a
          href="https://iconect.com/"
          className={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          iCONECT
        </a>
        &apos;s Cyber Data Mining platform for cyber incident response review—tightening
        breach triage, regulatory reporting, and notification workflows after an
        extensive bake-off across the category.
      </p>
      <blockquote className="my-6 border-l-4 border-[#0e5599] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Our new partnership with iCONECT marks a major enhancement in our
        cybersecurity and incident response services… helping our clients rebound
        stronger from data breaches.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Kevin M. Clark, CEO
        </span>
      </blockquote>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        The stack surfaces impacted data, risky personas, and PII in context—powered by
        AI tagging that clusters similar content inside decisioning workflows critical
        for regulated notifications and insurer dialogue.
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Clark noted the tooling automates repetitive tagging when minutes matter:
        &quot;This is especially critical when identifying and notifying affected data
        subjects following a cyber incident.&quot;
      </p>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        iCONECT emphasizes practitioner-built density analysis, intuitive exploration,
        and web-native review without brittle export gymnastics—front-loading risk so
        counsel can right-size spend.
      </p>
      <blockquote className="my-6 border-l-4 border-[#0e5599] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;We are thrilled to have been chosen by Right Discovery… enabling
        organizations to accelerate breach response times significantly.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Emily Johnston, Product Manager, Cyber Data Mining, iCONECT
        </span>
      </blockquote>
      <p className="mb-4 text-base leading-relaxed text-white/95 sm:text-lg">
        Clark underscored universal exposure: insurers, breach coaches, enterprise
        clients, and public sector teams all need repeatable accelerants because nobody
        enjoys infinite linear review after exfiltration.
      </p>
      <blockquote className="mb-10 border-l-4 border-[#0e5599] pl-4 text-base italic text-white/90 sm:text-lg">
        &quot;Breach response requires comprehensive workflows… Combined with Right
        Discovery&apos;s Cyber Incident Response practice, organizations can respond
        with speed and cost efficiencies.&quot;
        <span className="mt-2 block text-sm not-italic text-white/80">
          — Eric Dirks, Chief Revenue Officer, iCONECT
        </span>
      </blockquote>

      <p className="text-sm leading-relaxed text-white/75">
        <strong className="text-white/90">Topics:</strong> iCONECT, incident response,
        cyber breach, PII,{" "}
        <Link href="/" className={link}>
          Right Discovery
        </Link>
      </p>
    </article>
  );
}
