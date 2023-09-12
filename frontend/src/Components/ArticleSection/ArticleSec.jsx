import React from "react";
import Article from "../Articles/Article";
import ArticleTabs from "../ArticleTabs/ArticleTabs";
import "./ArticleSec.css";

export default function ArticleSec() {
  return (
    <div className="ArticleSec">
      <div className="articles  ">
        <div className="Trend-articles">
          <h1>Trending</h1>
          <div className="divider"></div>
        </div>
        <div className="article-container">
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}
