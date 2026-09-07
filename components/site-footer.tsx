"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="site-footer">
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
        home
      </Link>
      <span aria-hidden="true">/</span>
      <Link href="/sale" aria-current={pathname === "/sale" ? "page" : undefined}>
        sale
      </Link>
    </footer>
  );
}
