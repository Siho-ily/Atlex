"use client";

import { useEffect, useState } from "react";

import PaginationLayout from "@/components/common/layout/PaginationLayout";

function getNumericPages(items) {
  return items
    .map((item) => Number.parseInt(item.label, 10))
    .filter((page) => Number.isFinite(page));
}

export default function BlogHomePagination({ items }) {
  const numericPages = getNumericPages(items);
  const totalPages = Math.max(...numericPages, 1);
  const initialCurrentPage =
    Number.parseInt(items.find((item) => item.current)?.label, 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);

  useEffect(() => {
    setCurrentPage(initialCurrentPage);
  }, [initialCurrentPage]);

  return (
    <div
      className={[
        "pt-2",
        "[&_[data-slot='pagination-content']]:flex-wrap",
        "[&_[data-slot='pagination-content']]:gap-2",
        "[&_[data-slot='pagination-link']]:h-10",
        "[&_[data-slot='pagination-link']]:min-w-10",
        "[&_[data-slot='pagination-link']]:rounded-lg",
        "[&_[data-slot='pagination-link']]:border",
        "[&_[data-slot='pagination-link']]:px-3",
        "[&_[data-slot='pagination-link']]:text-sm",
        "[&_[data-slot='pagination-link']]:font-semibold",
        "[&_[data-slot='pagination-link']]:shadow-none",
        "[&_[data-slot='pagination-link']]:transition-colors",
        "[&_[data-slot='pagination-link']]:hover:no-underline",
        "[&_[data-slot='pagination-link'][data-active=true]]:border-foreground",
        "[&_[data-slot='pagination-link'][data-active=true]]:bg-foreground",
        "[&_[data-slot='pagination-link'][data-active=true]]:text-background",
        "[&_[data-slot='pagination-link']:not([data-active=true])]:border-border",
        "[&_[data-slot='pagination-link']:not([data-active=true])]:bg-card",
        "[&_[data-slot='pagination-link']:not([data-active=true])]:text-muted-foreground",
        "[&_[data-slot='pagination-link']>span]:hidden",
        "[&_[data-slot='pagination-ellipsis']]:h-10",
        "[&_[data-slot='pagination-ellipsis']]:min-w-10",
        "[&_[data-slot='pagination-ellipsis']]:px-2",
        "[&_[data-slot='pagination-ellipsis']]:text-muted-foreground",
      ].join(" ")}
    >
      <PaginationLayout
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        siblingCount={1}
        showEllipsis
        showFirstLast={false}
      />
    </div>
  );
}
