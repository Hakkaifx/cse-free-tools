"use client";

import { useDeals } from "@/context/DealsContext";

export default function CategoryFilter() {
  const { categories, category, setCategory } = useDeals();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((name) => (
        <button
          key={name}
          onClick={() => setCategory(name)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
            category === name
              ? "border-emerald-700 bg-emerald-700 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
