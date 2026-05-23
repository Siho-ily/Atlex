import React, { useState } from "react";
import { TabsList, TabsTrigger } from "@/components/common/ui/tabs";

const meta = {
  title: "Common/UI/Tabs",
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Tab 1");
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    
    return (
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    );
  },
};

export const Active = {
  args: {
    isActive: true,
    children: "Active Tab",
  },
  render: (args) => <TabsTrigger {...args} />,
};

export const Inactive = {
  args: {
    isActive: false,
    children: "Inactive Tab",
  },
  render: (args) => <TabsTrigger {...args} />,
};
