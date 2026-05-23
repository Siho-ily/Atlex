"use client"

import React, { useState } from "react";
import PolicyLayout from "../layout/PolicyLayout";
import PolicyItem from "../ui/PolicyItem";
import PolicySidebarItem from "../ui/PolicySidebarItem";
import { policyData } from "@/data/policy/policy-data";

export default function PolicyHome() {
  // 현재 활성화된 정책 ID (기본값: 첫 번째 항목)
  const [activeId, setActiveId] = useState(1);

  return (
    <PolicyLayout
      sidebar={
        <>
          {policyData.map((data) => (
            <PolicySidebarItem 
              key={data.id} 
              item={data} 
              isActive={activeId === data.id}
              onClick={() => setActiveId(data.id)}
            />
          ))}
        </>
      }
    >
      <div className="flex flex-col">
        {policyData.map((data) => (
          <PolicyItem key={data.id} item={data} />
        ))}
      </div>
    </PolicyLayout>
  );
}
