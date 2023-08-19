import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TabSelector.css";

export default function TabSelector() {
  const [selectedTab, setSelectedTab] = useState("Programming");

  const tabs = [
    { label: "Programming", id: 1 },
    { label: "Gaming", id: 2 },
    { label: "Graphic Design", id: 3 },
    { label: "AI", id: 4 },
    // Add more tabs as needed
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
