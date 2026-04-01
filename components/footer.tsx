export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-rule bg-bg py-8 px-12">
      <div className="max-w-[900px] mx-auto flex justify-between items-center">
        <div className="text-[12px] text-ink-muted">
          © {year} backform. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/ilyeshdz/backform" className="text-ink-muted text-[12px] no-underline hover:text-ink transition-colors duration-150">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
