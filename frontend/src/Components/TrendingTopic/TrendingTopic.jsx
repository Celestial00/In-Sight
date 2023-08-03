import React from "react";
import "./TrendingTopic.css";
import Tags from "../../Components/Tags/Tags";
import { BiBookBookmark } from "react-icons/bi";

export default function TrendingTopix() {
  return (
    <div className="Topic-trending-Card">
      <div className="profile-info">
        <div className="profile-pic"></div>

        <div className="profile-name">
          <p>Name</p>
        </div>
      </div>

      <div className="Article-desc">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="Actions">
        <div className="left">
          <div className="Date">
            <span>00/00</span>
          </div>

          <div>
            <Tags title={"Programming"} width={"80px"} height={"20"} fontsize={"0.6em"} />
          </div>
        </div>

        <div>
          <BiBookBookmark />
        </div>
      </div>
    </div>
  );
}
