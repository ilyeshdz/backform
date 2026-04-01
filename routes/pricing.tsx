import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing — backform</title>
      </Head>

      <section className="max-w-[900px] mx-auto px-12 py-[120px_48px_100px]">
        <p className="text-[11px] tracking-[0.12em] uppercase text-ink-muted mb-8 flex items-center gap-3">
          <span className="block w-6 h-px bg-ink-faint"></span>
        </p>
        <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.02em] mb-10 text-ink">
          Free.<br /><em className="italic text-accent">Always.</em>
        </h1>
        <p className="text-base text-ink-muted max-w-[540px] leading-[1.75] mb-16 font-light">
          No tiers. No limits. No credit card. We believe forms should be free.
        </p>

        <div className="border border-rule bg-bg p-12">
          <div className="text-[11px] text-accent tracking-[0.08em] mb-4">EVERYTHING</div>
          <div className="font-serif text-[56px] font-normal text-ink mb-2">$0</div>
          <p className="text-[15px] text-ink-muted mb-10 font-light">Forever. No kidding.</p>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              Unlimited forms
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              Unlimited responses
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              File uploads (10MB per file)
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              All field types
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              CSV & JSON export
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              Webhooks
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              Custom embed
            </div>
            <div className="flex items-center gap-3 text-[15px] text-ink font-light">
              <span className="text-accent">✓</span>
              No backform branding
            </div>
          </div>

          <a href="/" className="inline-block bg-ink text-bg px-8 py-3 text-[14px] no-underline hover:bg-accent transition-colors duration-150">
            Create a form →
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-rule">
          <h3 className="font-serif text-[24px] font-normal mb-6 text-ink">Self-host for free</h3>
          <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px] mb-6">
            Run backform on your own infrastructure. Docker, Deno Deploy, or anywhere that runs Node. 
            It's MIT licensed — your data stays yours, forever.
          </p>
          <a href="https://github.com/ilyeshdz/backform" className="text-accent text-[14px] no-underline hover:underline">
            View on GitHub →
          </a>
        </div>
      </section>
    </>
  );
});
