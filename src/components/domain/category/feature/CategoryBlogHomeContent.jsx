"use client";

import { useState } from "react";

import CategoryBlogHomeSidebarCategoryDialog from "@/components/domain/category/layout/CategoryBlogHomeSidebarCategoryDialog";
import BlogHomeFeed from "@/components/domain/blog-home/feature/BlogHomeFeed";
import BlogHomeSidebar from "@/components/domain/blog-home/feature/BlogHomeSidebar";
import BlogHomeBodyLayout from "@/components/domain/blog-home/layout/BlogHomeBodyLayout";
import {
  ALL_CATEGORY_ID,
  categoryPickerCategories,
} from "@/data/category/category-picker-mock-data";

const ALL_TAG_ID = "all";

function getInitialSelectedTagId(tags) {
  return tags.find((tag) => tag.active)?.id ?? tags[0]?.id ?? ALL_TAG_ID;
}

export default function CategoryBlogHomeContent({
  categories = categoryPickerCategories,
  feed,
  profile,
  tags,
}) {
  const [selectedTagId, setSelectedTagId] = useState(() =>
    getInitialSelectedTagId(tags)
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL_CATEGORY_ID);

  const resolvedTags = tags.map((tag) => ({
    ...tag,
    active: tag.id === selectedTagId,
  }));

  function handleCategorySelect(categoryId) {
    setSelectedCategoryId(categoryId);
  }

  const quickActionOverrides = {
    category: ({ id, label }) => (
      <CategoryBlogHomeSidebarCategoryDialog
        key={id}
        actionId={id}
        ariaLabel={label}
        categories={categories}
        label={label}
        onCategorySelect={handleCategorySelect}
        posts={feed.posts}
        selectedCategoryId={selectedCategoryId}
      />
    ),
  };

  return (
    <BlogHomeBodyLayout
      sidebar={
        <BlogHomeSidebar
          onTagSelect={setSelectedTagId}
          profile={profile}
          quickActionOverrides={quickActionOverrides}
          tags={resolvedTags}
        />
      }
    >
      <BlogHomeFeed feed={feed} />
    </BlogHomeBodyLayout>
  );
}
