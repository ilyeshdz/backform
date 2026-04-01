export function Header() {
  return (
    <header className="sticky top-0 z-100 flex justify-between items-center px-12 py-8 bg-bg max-w-[900px] mx-auto">
      <a href="/" className="font-mono font-medium text-[15px] tracking-[-0.02em] text-ink no-underline">
        back<span className="text-accent">form</span>
      </a>
      <nav className="hidden md:flex gap-10 items-center">
        <a href="/how" className="text-ink-muted text-[13px] no-underline hover:text-ink transition-colors duration-150">
          How it works
        </a>
        <a href="/features" className="text-ink-muted text-[13px] no-underline hover:text-ink transition-colors duration-150">
          Features
        </a>
        <a href="/pricing" className="text-ink-muted text-[13px] no-underline hover:text-ink transition-colors duration-150">
          Pricing
        </a>
        <a href="/about" className="text-ink-muted text-[13px] no-underline hover:text-ink transition-colors duration-150">
          About
        </a>
        <a href="https://github.com/ilyeshdz/backform" className="text-accent border border-accent px-5 py-2 text-[13px] no-underline hover:bg-accent hover:text-bg transition-all duration-150">
          GitHub →
        </a>
      </nav>
    </header>
  );
}
