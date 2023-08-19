import React from "react";
import "./Article.css";
import img from "../../Assets/car.jpg";
import Tags from "../Tags/Tags";
import { BiLike, BiComment } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";

export default function Article() {
  return (
    <div className="Article-Card">
      <div className="Image">
        <img src={img} alt="" srcset="" />
        <div className="tag">
          <Tags title={"Cars"} />
        </div>
      </div>

      <div className="Article-Desc">
        <div className="intro-title">
          <h1>Cars</h1>
        </div>

        <div className="Desc-text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            eaque veritatis ut, tempore explicabo temporibus obcaecati dolor eos
            minima ea non provident mollitia.
          </p>
        </div>

        <div className="Actions">
          <div className="init">
            <BiLike className="Bilike" />

            <BiComment className="BiComment" />
          </div>

          <div className="sec">
            <BsBookmarkHeart className="Bs" />
          </div>
        </div>
      </div>
    </div>
  );
}
