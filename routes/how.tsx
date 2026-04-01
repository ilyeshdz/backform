import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function HowItWorks() {
  return (
    <>
      <Head>
        <title>How it works — backform</title>
      </Head>

      <section className="max-w-[900px] mx-auto px-12 py-[120px_48px_100px]">
        <p className="text-[11px] tracking-[0.12em] uppercase text-ink-muted mb-8 flex items-center gap-3">
          <span className="block w-6 h-px bg-ink-faint"></span>
        </p>
        <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-normal leading-[1.05] tracking-[-0.02em] mb-10 text-ink">
          Create a form.<br />Share a link.<br /><em className="italic text-accent">Done.</em>
        </h1>
        <p className="text-base text-ink-muted max-w-[540px] leading-[1.75] mb-16 font-light">
          Three steps. No account needed. No credit card. No onboarding.
        </p>

        <div className="space-y-20">
          <div>
            <div className="text-[11px] text-accent tracking-[0.08em] mb-4">STEP 01</div>
            <h2 className="font-serif text-[28px] font-normal mb-4 text-ink">Build your form</h2>
            <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px]">
              Add the fields you need — text, email, textarea, multiple choice, or file upload. 
              Give it a title. That's it. The form is ready in seconds.
            </p>
          </div>

          <div>
            <div className="text-[11px] text-accent tracking-[0.08em] mb-4">STEP 02</div>
            <h2 className="font-serif text-[28px] font-normal mb-4 text-ink">Get your link</h2>
            <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px]">
              Every form automatically gets a unique URL. Share it however you want — 
              email, social media, embed on your site, or QR code.
            </p>
          </div>

          <div>
            <div className="text-[11px] text-accent tracking-[0.08em] mb-4">STEP 03</div>
            <h2 className="font-serif text-[28px] font-normal mb-4 text-ink">Collect responses</h2>
            <p className="text-[15px] text-ink-muted leading-[1.7] font-light max-w-[500px]">
              Responses come straight to your dashboard. Export as CSV or JSON anytime. 
              Set up webhooks to send data to your own tools automatically.
            </p>
          </div>
        </div>
      </section>
    </>
  );
});
