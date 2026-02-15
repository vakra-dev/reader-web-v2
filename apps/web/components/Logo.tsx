import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="font-semibold text-lg tracking-tight">reader</span>
    </Link>
  );
}
