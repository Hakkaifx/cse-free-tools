import DealCard from "@/components/DealCard";
import EmptyState from "@/components/EmptyState";

export default function DealGrid({ deals, emptyTitle, emptyMessage }) {
  if (deals.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}
