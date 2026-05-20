import Link from "next/link";
import type { ReactNode } from "react";

const linkClass =
  "text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-900 hover:decoration-blue-500";

const TOKEN = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    const external = /^https?:\/\//i.test(href);
    out.push(
      external ? (
        <a key={`l${i++}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
        </a>
      ) : (
        <Link key={`l${i++}`} href={href} className={linkClass}>
          {label}
        </Link>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : [text];
}
