"use client";

import { createContext, useContext, useState } from "react";
import { deals, categories } from "@/data/deals";

const DealsContext = createContext(null);

export function DealsProvider({ children }) {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [savedIds, setSavedIds] = useState([]);

  // Add the id if it is not saved yet, remove it if it is.
  const toggleSave = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearSaved = () => setSavedIds([]);
  const isSaved = (id) => savedIds.includes(id);

  // Deals that match both the search box and the selected category.
  const query = searchText.trim().toLowerCase();
  const filteredDeals = deals.filter((deal) => {
    const matchesCategory = category === "All" || deal.category === category;
    const matchesSearch =
      query === "" ||
      deal.name.toLowerCase().includes(query) ||
      deal.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const savedDeals = deals.filter((deal) => savedIds.includes(deal.id));

  const value = {
    deals,
    categories,
    searchText,
    setSearchText,
    category,
    setCategory,
    savedIds,
    toggleSave,
    clearSaved,
    isSaved,
    filteredDeals,
    savedDeals,
  };

  return <DealsContext.Provider value={value}>{children}</DealsContext.Provider>;
}

export function useDeals() {
  const context = useContext(DealsContext);
  if (!context) {
    throw new Error("useDeals must be used inside a DealsProvider");
  }
  return context;
}
