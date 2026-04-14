"use client";

import { useState } from "react";
import {
  extractBodyTags,
  mergeTags,
  parseTagInput,
} from "@/lib/post-editor/tags";

export default function usePostEditorTags(body) {
  const [tagInput, setTagInput] = useState("");
  const [manualTags, setManualTags] = useState([]);

  // 본문에서 추출한 태그와 직접 입력한 태그를 합쳐서 최종 태그 목록을 만듭니다.
  const bodyTags = extractBodyTags(body);
  const combinedTags = mergeTags(manualTags, bodyTags);

  function registerTags(value) {
    const nextTags = parseTagInput(value);

    if (nextTags.length === 0) {
      return false;
    }

    setManualTags((currentTags) => mergeTags(currentTags, nextTags));
    setTagInput("");

    return true;
  }

  function removeManualTag(tagToRemove) {
    setManualTags((currentTags) =>
      currentTags.filter((tag) => tag !== tagToRemove),
    );
  }

  function handleTagInputChange(value) {
    setTagInput(value);
  }

  function handleTagInputKeyDown(event) {
    if (event.nativeEvent.isComposing) {
      return;
    }

    // 벨로그처럼 Enter로 태그를 확정하고, 빈 입력 상태에선 Backspace로 마지막 태그를 지웁니다.
    if (event.key === "Enter") {
      event.preventDefault();
      registerTags(tagInput);
      return;
    }

    if (event.key === "Backspace" && !tagInput.trim() && manualTags.length > 0) {
      event.preventDefault();
      setManualTags((currentTags) => currentTags.slice(0, -1));
    }
  }

  return {
    bodyTags,
    combinedTags,
    manualTags,
    onRemoveTag: removeManualTag,
    onTagInputChange: handleTagInputChange,
    tagInput,
    onTagInputKeyDown: handleTagInputKeyDown,
  };
}
