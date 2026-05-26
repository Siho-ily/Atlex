"use client";

import { useState } from "react";

import BlogHomeFeed from "@/components/domain/blog-home/feature/BlogHomeFeed";
import BlogHomeSidebar from "@/components/domain/blog-home/feature/BlogHomeSidebar";
import BlogHomeBodyLayout from "@/components/domain/blog-home/layout/BlogHomeBodyLayout";

const ALL_TAG_ID = "all";

function getInitialSelectedTagId(tags) {
  return tags.find((tag) => tag.active)?.id ?? tags[0]?.id ?? ALL_TAG_ID;
}

export default function BlogHomeContent({ feed, profile, tags }) {
  const [selectedTagId, setSelectedTagId] = useState(() =>
    getInitialSelectedTagId(tags)
  );

  const resolvedTags = tags.map((tag) => ({
    ...tag,
    active: tag.id === selectedTagId,
  }));

  return (
    <BlogHomeBodyLayout
      sidebar={
        <BlogHomeSidebar
          profile={profile}
          tags={resolvedTags}
          onTagSelect={setSelectedTagId}
        />
      }
    >
      <BlogHomeFeed feed={feed} />
    </BlogHomeBodyLayout>
  );
}
