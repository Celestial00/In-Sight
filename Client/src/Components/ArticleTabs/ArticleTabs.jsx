import React from "react";
import "./ArticleTabs.css";
import img from "../../Assets/Grap.jpg";
import pro from "../../Assets/pro.jpg";
import Tags from "../Tags/Tags";
import { CiBookmarkPlus } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function ArticleTabs() {
  var Nav = useNavigate();
  function toggleEditorPage() {
    console.log("sups");

    let id = 1;
    Nav("/Article", { state: { id: id } });
  }

  return (
    <div className="ArticleTabs" onClick={toggleEditorPage}>
      <div className="Tab-image">
        <img src={img} alt="" srcset="" />
      </div>

      <div className="tab-user-data">
        <div className="user">
          <div className="profile-img">
            <img src={pro} alt="" />
          </div>

          <div className="profile-info">
            <h4>Jacob smith</h4>
          </div>
        </div>
        <div className="Article-title">
          <h2>
            The Art of Visual Communication: Exploring the World of Graphic
            Design
          </h2>
        </div>

        <div className="Description">
          <p>
            Graphic design is a powerful form of visual communication that
            surrounds us in our daily lives. From the stunning visuals of
            product packaging to the captivating layouts of magazines and
            websites.
          </p>
        </div>
        <div className="tags-icons">
          <div className="tagss">
            <Tags title={"Design"} />
          </div>

          <div className="icons">
            <CiBookmarkPlus className="shitty-icons-1" />
            <SlOptionsVertical className="shitty-icons-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
