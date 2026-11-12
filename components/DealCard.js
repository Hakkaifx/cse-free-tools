"use client";

import Link from "next/link";
import { useDeals } from "@/context/DealsContext";

export default function DealCard({ deal }) {
  const { isSaved, toggleSave } = useDeals();
  const saved = isSaved(deal.id);

  return (
    <article className="flex flex-col rounded-lg border border-slate-200 bg-white p-4">
      <span className="mb-2 w-fit rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
        {deal.category}
      </span>
      <h2 className="text-lg font-semibold text-slate-900">{deal.name}</h2>
      <p className="mt-1 flex-1 text-sm text-slate-600">{deal.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link
          href={`/deals/${deal.id}`}
          className="text-sm font-medium text-emerald-800 underline"
        >
          View details
        </Link>
        <button
          onClick={() => toggleSave(deal.id)}
          className={`rounded-md border px-3 py-1.5 text-sm font-medium ${
            saved
              ? "border-slate-300 bg-slate-100 text-slate-800"
              : "border-emerald-700 bg-emerald-700 text-white"
          }`}
        >
          {saved ? "Remove" : "Save"}
        </button>
      </div>
    </article>
  );
}
