import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TabSelector.css";

export default function TabSelector() {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = [
    { label: "All", id: 1 },
    { label: "Programming", id: 2 },
    { label: "Gaming", id: 3 },
    { label: "Graphic Design", id: 4 },
    { label: "AI", id: 5 },
  ];

  const handleTabClick = (tabLabel) => {
    setSelectedTab(tabLabel);
  };

  return (
    <div className="TabSelector">
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href=""
              className={selectedTab === tab.label ? "selected" : ""}
              onClick={() => handleTabClick(tab.label)}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
