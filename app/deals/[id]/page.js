"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useDeals } from "@/context/DealsContext";
import EmptyState from "@/components/EmptyState";

export default function DealDetailPage() {
  const { id } = useParams();
  const { deals, isSaved, toggleSave } = useDeals();
  const deal = deals.find((d) => d.id === Number(id));

  if (!deal) {
    return <EmptyState title="Tool not found" message="This tool does not exist in the sample data." />;
  }

  const saved = isSaved(deal.id);

  return (
    <div>
      <Link href="/" className="text-sm font-medium text-emerald-800 underline">
        Back to Browse
      </Link>
      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
          {deal.category}
        </span>
        <h1 className="mt-3 text-2xl font-bold text-slate-900">{deal.name}</h1>
        <p className="mt-2 text-slate-700">{deal.description}</p>
        <h2 className="mt-5 font-semibold text-slate-900">How to claim</h2>
        <p className="mt-1 text-slate-700">{deal.howToClaim}</p>
        <button
          onClick={() => toggleSave(deal.id)}
          className={`mt-6 rounded-md border px-4 py-2 text-sm font-medium ${
            saved
              ? "border-slate-300 bg-slate-100 text-slate-800"
              : "border-emerald-700 bg-emerald-700 text-white"
          }`}
        >
          {saved ? "Remove from saved" : "Save this tool"}
        </button>
      </div>
    </div>
  );
}
