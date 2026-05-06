export function Footer() {
  return (
    <footer className="border-t border-edge/50 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-base text-fg-tertiary">
          <span>&copy; 2026 Reader</span>
          <div className="flex items-center gap-3">
            <a
              href="https://app.reader.dev"
              className="hover:text-fg-secondary transition-colors"
            >
              Platform
            </a>
            <span className="text-edge">·</span>
            <a
              href="https://docs.reader.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg-secondary transition-colors"
            >
              Docs
            </a>
            <span className="text-edge">·</span>
            <a
              href="https://reader.dev/blog"
              className="hover:text-fg-secondary transition-colors"
            >
              Blog
            </a>
            <span className="text-edge">·</span>
            <a
              href="https://github.com/vakra-dev/reader"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg-secondary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
