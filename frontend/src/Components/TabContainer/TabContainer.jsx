import React from "react";
import "./TabContainer.css";
import TabSelector from "../TabSelector/TabSelector";
import ArticleTabs from "../ArticleTabs/ArticleTabs";

export default function TabContainer() {
  return (
    <div className="TabContainer">
      <div className="selectortab">
        <TabSelector />
      </div>

      <div className="ContainerForTabs">
        <ArticleTabs />
        <ArticleTabs />
        <ArticleTabs />
      </div>
    </div>
  );
}
