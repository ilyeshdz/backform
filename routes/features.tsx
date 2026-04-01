import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Features() {
  return (
    <>
      <Head>
        <title>Features — backform</title>
      </Head>

      <section className="max-w-[900px] mx-auto px-12 py-[120px_48px_100px]">
        <p className="text-[11px] tracking-[0.12em] uppercase text-ink-muted mb-8 flex items-center gap-3">
          <span className="block w-6 h-px bg-ink-faint"></span>
        </p>
        <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.02em] mb-10 text-ink">
          Everything you need.<br /><em className="italic text-accent">Nothing you don't.</em>
        </h1>
        <p className="text-base text-ink-muted max-w-[540px] leading-[1.75] mb-16 font-light">
          A focused set of features that just work. No bloat, no complexity, no surprises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-rule">
          <div className="py-9 px-8 border-r border-b border-rule hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">01</div>
            <div className="font-serif text-[22px] font-normal mb-3">Dead simple</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Create a form in seconds. Text fields, multiple choice, file upload. Nothing more, nothing less. You don't need a tutorial.</p>
          </div>
          <div className="py-9 px-8 border-b border-rule hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">02</div>
            <div className="font-serif text-[22px] font-normal mb-3">Shareable by default</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Every form gets a clean URL. Send it, embed it, link it anywhere. No accounts required for respondents.</p>
          </div>
          <div className="py-9 px-8 border-r border-b border-rule hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">03</div>
            <div className="font-serif text-[22px] font-normal mb-3">Zero tracking</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">No analytics. No pixels. No fingerprinting. We don't know who fills your forms, and we don't want to.</p>
          </div>
          <div className="py-9 px-8 border-b border-rule hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">04</div>
            <div className="font-serif text-[22px] font-normal mb-3">Truly open source</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">The entire codebase is on GitHub. MIT licensed. Self-host in under five minutes. Own your data, forever.</p>
          </div>
          <div className="py-9 px-8 border-r border-b border-rule hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">05</div>
            <div className="font-serif text-[22px] font-normal mb-3">No lock-in</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Export your responses as CSV or JSON anytime. Migrate away whenever you want. We built the exit door ourselves.</p>
          </div>
          <div className="py-9 px-8 border-b border-rule hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">06</div>
            <div className="font-serif text-[22px] font-normal mb-3">Works everywhere</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Embed on any site with a single line. Webhooks to push responses wherever you need them. Plain HTTP.</p>
          </div>
          <div className="py-9 px-8 border-r hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">07</div>
            <div className="font-serif text-[22px] font-normal mb-3">File uploads</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Accept files up to 10MB. Images, PDFs, documents. Stored securely. Download anytime from your dashboard.</p>
          </div>
          <div className="py-9 px-8 hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">08</div>
            <div className="font-serif text-[22px] font-normal mb-3">Webhooks</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Connect to Zapier, Make, or your own scripts. Get instant notifications when someone submits a response.</p>
          </div>
        </div>
      </section>
    </>
  );
});
