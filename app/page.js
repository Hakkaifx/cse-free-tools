"use client";

import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import DealGrid from "@/components/DealGrid";
import { useDeals } from "@/context/DealsContext";

export default function BrowsePage() {
  const { filteredDeals } = useDeals();

  return (
    <>
      <PageHeader
        title="Browse free tools"
        subtitle="Search and filter tools for coding, design, cloud and learning."
      />
      <div className="mb-6 space-y-3">
        <SearchBar />
        <CategoryFilter />
      </div>
      <DealGrid
        deals={filteredDeals}
        emptyTitle="No tools found"
        emptyMessage="Try a different search word or choose another category."
      />
    </>
  );
}
