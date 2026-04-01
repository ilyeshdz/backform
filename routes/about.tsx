import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function About() {
  return (
    <>
      <Head>
        <title>About — backform</title>
      </Head>

      <section className="max-w-[900px] mx-auto px-12 py-[120px_48px_100px]">
        <p className="text-[11px] tracking-[0.12em] uppercase text-ink-muted mb-8 flex items-center gap-3">
          <span className="block w-6 h-px bg-ink-faint"></span>
        </p>
        <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.02em] mb-10 text-ink">
          Built for people<br /><em className="italic text-accent">who hate forms.</em>
        </h1>
        <p className="text-base text-ink-muted max-w-[540px] leading-[1.75] mb-16 font-light">
          We got tired of bloated form builders that treat you like a product. So we built something different.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="font-serif text-[24px] font-normal mb-4 text-ink">The problem</h2>
            <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px]">
              Most form tools are built to lock you in. They track your users, upsell you constantly, 
              and make exporting your own data surprisingly difficult. We wanted something simpler.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[24px] font-normal mb-4 text-ink">Our approach</h2>
            <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px]">
              backform does one thing: let you create forms and collect responses. That's it. 
              No analytics. No tracking. No accounts required for the people filling out your forms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[24px] font-normal mb-4 text-ink">Open source</h2>
            <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px]">
              We believe in transparency. The entire codebase is MIT licensed and available on GitHub. 
              Self-host it, fork it, modify it. We can't lock you in if the code is open.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-rule">
          <h3 className="font-serif text-[20px] font-normal mb-6 text-ink">Get in touch</h3>
          <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px] mb-6">
            Found a bug? Have a feature request? Just want to say hi? We'd love to hear from you.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/ilyeshdz/backform" className="text-accent text-[14px] no-underline hover:underline">
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </>
  );
});
