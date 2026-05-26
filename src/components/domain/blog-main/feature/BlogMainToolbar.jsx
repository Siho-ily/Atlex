import BlogMainFilterBar from "../ui/BlogMainFilterBar";
import BlogMainPeriodGroup from "../ui/BlogMainPeriodGroup";

export default function BlogMainToolbar({
  activeFilterId,
  activePeriodId,
  filters,
  periods,
}) {
  return (
    <section className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <BlogMainFilterBar filters={filters} activeFilterId={activeFilterId} />
      <BlogMainPeriodGroup periods={periods} activePeriodId={activePeriodId} />
    </section>
  );
}
