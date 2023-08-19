import React from "react";
import ArticleTabs from "../../Components/ArticleTabs/ArticleTabs";
import Navbar from "../../Components/Navbar/Navbar";
import TabContainer from "../../Components/TabContainer/TabContainer";

export default function Home() {
  return (
    <div>
      <Navbar isit={true} />

      <TabContainer />
    </div>
  );
}
