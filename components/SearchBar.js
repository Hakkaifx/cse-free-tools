"use client";

import { useDeals } from "@/context/DealsContext";

export default function SearchBar() {
  const { searchText, setSearchText } = useDeals();

  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search tools by name or description"
      aria-label="Search tools"
      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-500 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
    />
  );
}
