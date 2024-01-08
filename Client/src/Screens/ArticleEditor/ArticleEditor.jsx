import React from "react";
import "./ArticleEditor.css";
import { MdArrowBackIos } from "react-icons/md";
import Tags from "../../Components/Tags/Tags";
import { useNavigate } from "react-router-dom";

export default function ArticleEditor() {
  var Nav = useNavigate();

  var TagsList = [
    { label: "All", id: 1 },
    { label: "Programming", id: 2 },
    { label: "Gaming", id: 3 },
    { label: "Graphic Design", id: 4 },
    { label: "AI", id: 5 },
  ];

  function toggleHomePage() {
    Nav("/home");
  }

  return (
    <div className="Article-Editor">
      <div className="back-post-btn">
        <MdArrowBackIos className="back-icon" onClick={toggleHomePage} />

        <div className="article-custom-btn">
          <p>Post</p>
        </div>
      </div>

      <div className="Article-input-fields">
        <input type="text" placeholder="Title" />

        <textarea
          name="Content"
          placeholder="Content"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      
      <div className="taggings">
        <h1>select a tag</h1>
        <div className="taglist">
          {TagsList.map((e) => {
            return <Tags title={e.label} />;
          })}
        </div>
      </div>
    </div>
  );
}
