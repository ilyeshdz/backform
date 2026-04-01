import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { Button } from "@/components/ui/index.ts";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>backform — forms, without the noise</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* HERO */}
      <section className="max-w-[900px] mx-auto px-12 py-[120px_48px_100px]">
        <p className="text-[11px] tracking-[0.12em] uppercase text-ink-muted mb-8 flex items-center gap-3">
          <span className="block w-6 h-px bg-ink-faint"></span>
        </p>
        <h1 className="font-serif text-[clamp(52px,8vw,88px)] font-normal leading-[1.02] tracking-[-0.02em] mb-10 text-ink">
          A form tool<br />that stays<br />out of your<br /><em className="italic text-accent">way.</em>
        </h1>
        <p className="text-base text-ink-muted max-w-[540px] leading-[1.75] mb-13 font-light">
          Build a form. Share a link. Get responses.<br />
          No tracking. No analytics. No lock-in. No bullshit.
        </p>
        <nav className="hidden md:flex gap-10 items-center flex-wrap">
          <Button href="/">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.5"/></svg>
            Create a form
          </Button>
          <a href="/how" className="text-ink-muted text-[13px] no-underline inline-flex items-center gap-[6px] transition-colors duration-150 hover:text-ink">
            See how it works →
          </a>
        </nav>
      </section>

      {/* FEATURES */}
      <section className="max-w-[900px] mx-auto px-12 py-25" id="features">
        <p className="text-[11px] tracking-[0.12em] uppercase text-ink-faint mb-14 flex items-center gap-3">
          What you get
          <span className="flex-1 h-px bg-rule"></span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 border border-rule">
          <div className="py-9 px-8 border-r border-rule border-b transition-colors duration-150 hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">01</div>
            <div className="font-serif text-[22px] font-normal mb-3">Dead simple</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Create a form in seconds. Text fields, multiple choice, file upload. Nothing more, nothing less. You don't need a tutorial.</p>
          </div>
          <div className="py-9 px-8 border-b border-rule transition-colors duration-150 hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">02</div>
            <div className="font-serif text-[22px] font-normal mb-3">Shareable by default</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Every form gets a clean URL. Send it, embed it, link it anywhere. No accounts required for respondents.</p>
          </div>
          <div className="py-9 px-8 border-r border-rule border-b transition-colors duration-150 hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">03</div>
            <div className="font-serif text-[22px] font-normal mb-3">Zero tracking</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">No analytics. No pixels. No fingerprinting. We don't know who fills your forms, and we don't want to.</p>
          </div>
          <div className="py-9 px-8 border-b border-rule transition-colors duration-150 hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">04</div>
            <div className="font-serif text-[22px] font-normal mb-3">Truly open source</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">The entire codebase is on GitHub. MIT licensed. Self-host in under five minutes. Own your data, forever.</p>
          </div>
          <div className="py-9 px-8 border-r border-rule transition-colors duration-150 hover:bg-accent-light md:border-r">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">05</div>
            <div className="font-serif text-[22px] font-normal mb-3">No lock-in</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Export your responses as CSV or JSON anytime. Migrate away whenever you want. We built the exit door ourselves.</p>
          </div>
          <div className="py-9 px-8 transition-colors duration-150 hover:bg-accent-light">
            <div className="text-[11px] text-ink-faint tracking-[0.08em] mb-4">06</div>
            <div className="font-serif text-[22px] font-normal mb-3">Works everywhere</div>
            <p className="text-[13px] text-ink-muted leading-[1.7] font-light">Embed on any site with a single line. Webhooks to push responses wherever you need them. Plain HTTP.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-rule py-25 px-12 bg-[#EFECE4]" id="compare">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[11px] tracking-[0.12em] uppercase text-ink-faint mb-14 flex items-center gap-3">
            Why not the others?
            <span className="flex-1 h-px bg-rule"></span>
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,44px)] font-normal mb-14 leading-[1.15] max-w-[600px]">
            Most tools are either<br /><em className="italic text-accent">too locked-in</em> or too basic.
          </h2>
          <div className="w-full border border-rule bg-bg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-rule">
                  <th className="text-left py-4 px-6 text-[11px] tracking-widest uppercase text-ink-muted font-normal">Feature</th>
                  <th className="text-center py-4 px-6 text-[11px] tracking-widest uppercase text-accent font-normal bg-accent-light border-l border-rule">backform</th>
                  <th className="text-center py-4 px-6 text-[11px] tracking-widest uppercase text-ink-muted font-normal border-l border-rule">Typeform</th>
                  <th className="text-center py-4 px-6 text-[11px] tracking-widest uppercase text-ink-muted font-normal border-l border-rule">Google Forms</th>
                  <th className="text-center py-4 px-6 text-[11px] tracking-widest uppercase text-ink-muted font-normal border-l border-rule">Tally</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-rule hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">Self-hostable</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                </tr>
                <tr className="border-b border-rule hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">Open source</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                </tr>
                <tr className="border-b border-rule hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">No tracking / analytics</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                </tr>
                <tr className="border-b border-rule hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">Data export (CSV + JSON)</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule">Paid</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule">Paid</td>
                </tr>
                <tr className="border-b border-rule hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">No respondent account needed</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                </tr>
                <tr className="hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">Webhooks</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule">Paid</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule">Paid</td>
                </tr>
                <tr className="hover:bg-accent-light">
                  <td className="py-4 px-6 text-[13px] text-ink font-light">Free, forever</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-medium bg-accent-light border-l border-rule"><span className="text-accent text-base">✓</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule"><span className="text-ink-faint text-[18px]">✗</span></td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule">With Google account</td>
                  <td className="text-center py-4 px-6 text-[13px] text-ink font-light border-l border-rule">Limits apply</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OSS */}
      <section className="max-w-[900px] mx-auto px-12 py-25" id="oss">
        <div>
          <p className="text-[11px] tracking-[0.12em] uppercase text-ink-faint mb-6 flex items-center gap-3">
            Open source
            <span className="flex-1 h-px bg-rule"></span>
          </p>
          <h2 className="font-serif text-[clamp(28px,3.5vw,38px)] font-normal leading-[1.2] mb-5">
            Built in the open.<br /><em className="italic text-accent">Runs anywhere.</em>
          </h2>
          <p className="text-[13px] text-ink-muted leading-[1.75] font-light mb-7">
            backform is MIT-licensed and built with Deno. Self-host it on your own server in five minutes. The cloud version exists for convenience — not to trap you.
          </p>
          <p className="text-[13px] text-ink-muted leading-[1.75] font-light mb-7">
            No telemetry. No phoning home. No surprise pricing changes. It's your data and your infrastructure.
          </p>
          <Button href="https://github.com/ilyeshdz/backform" variant="outline">
            GitHub →
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule bg-ink py-25 px-12 text-center">
        <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-normal text-bg mb-5 leading-[1.1]">
          Ready to just<br /><em className="italic text-[#8BC8A0]">build a form?</em>
        </h2>
        <p className="text-ink-muted text-sm mb-11 font-light">No credit card. No account setup. No onboarding flow.</p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Button href="/" variant="secondary">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.5"/></svg>
            Create your first form
          </Button>
          <Button href="https://github.com/ilyeshdz/backform" variant="outline">
            Self-host it →
          </Button>
        </div>
      </section>
    </>
  );
});
