import { ALL_CATEGORY_ID } from "@/data/category/category-picker-mock-data";

function toDateValue(date) {
  if (!date) {
    return 0;
  }

  return Date.parse(date.replaceAll(".", "-")) || 0;
}

export function findCategoryById(categories, categoryId) {
  return categories.find((category) => category.id === categoryId);
}

export function filterPostsByCategoryId(posts, categories, categoryId) {
  if (!categoryId || categoryId === ALL_CATEGORY_ID) {
    return posts;
  }

  const selectedCategory = findCategoryById(categories, categoryId);
  const postIds = new Set(selectedCategory?.postIds ?? []);

  return posts.filter((post) => postIds.has(post.id));
}

export function getCategoryPickerItems(categories, posts) {
  return categories.map((category) => {
    const relatedPosts = filterPostsByCategoryId(posts, categories, category.id);
    const latestPost = [...relatedPosts].sort(
      (left, right) => toDateValue(right.date) - toDateValue(left.date)
    )[0];

    return {
      ...category,
      latestPost,
      postCount:
        category.id === ALL_CATEGORY_ID
          ? posts.length
          : (category.postIds ?? []).length,
    };
  });
}
