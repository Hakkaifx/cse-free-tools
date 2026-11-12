"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import DealGrid from "@/components/DealGrid";
import { useDeals } from "@/context/DealsContext";

export default function SavedPage() {
  const { savedDeals, clearSaved } = useDeals();

  return (
    <>
      <PageHeader
        title="Saved tools"
        subtitle="Tools you saved appear here. Remove any tool or clear the whole list."
      />
      {savedDeals.length > 0 && (
        <button
          onClick={clearSaved}
          className="mb-4 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-100"
        >
          Clear all saved
        </button>
      )}
      <DealGrid
        deals={savedDeals}
        emptyTitle="Nothing saved yet"
        emptyMessage="Go to Browse and press Save on any tool."
      />
      {savedDeals.length === 0 && (
        <Link href="/" className="mt-4 inline-block font-medium text-emerald-800 underline">
          Go to Browse
        </Link>
      )}
    </>
  );
}
