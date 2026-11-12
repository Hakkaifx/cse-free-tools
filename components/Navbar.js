"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDeals } from "@/context/DealsContext";

export default function Navbar() {
  const pathname = usePathname();
  const { savedIds } = useDeals();

  const linkClass = (href) =>
    `rounded-md px-3 py-1.5 text-sm font-medium ${
      pathname === href
        ? "bg-emerald-700 text-white"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Free tools for CSE students
        </Link>
        <div className="flex gap-2">
          <Link href="/" className={linkClass("/")}>
            Browse
          </Link>
          <Link href="/saved" className={linkClass("/saved")}>
            Saved ({savedIds.length})
          </Link>
        </div>
      </nav>
    </header>
  );
}
