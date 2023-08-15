import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import ArticleSec from "../../Components/ArticleSection/ArticleSec";

export default function Welcome() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <ArticleSec />
      </div>
    </>
  );
}
