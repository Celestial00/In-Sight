import React from "react";
import "./Trending.css";
import TrendingTopix from "../TrendingTopic/TrendingTopic";
import Tags from "../Tags/Tags";

export default function Trending() {
  return (
    <div className="Trending-Sec">
      <div className="title">
        {" "}
        <p>Article's</p> <div className="line"></div>{" "}
      </div>

      <div className="Content">
        <div className="Trending-topics">
          <TrendingTopix />
          <TrendingTopix />
          <TrendingTopix />
          <TrendingTopix />
        </div>

        <div className="sidebar">

            <div className="sidebar-title">
                <h1> See something you like</h1>
            </div>

            <div className="Tags-container">

                
            <Tags title={"programming"} width={"180px"} height={"40px"} fontsize={"0.8em"} fontweight={"600"} margin={"10px"}  />
            <Tags title={"fast"} width={"180px"} height={"40px"} fontsize={"0.8em"} fontweight={"600"} margin={"10px"}  />
            <Tags title={"education"} width={"180px"} height={"40px"} fontsize={"0.8em"} fontweight={"600"} margin={"10px"}  />
            <Tags title={"love"} width={"180px"} height={"40px"} fontsize={"0.8em"} fontweight={"600"} margin={"10px"}  />

           
               

            </div>

            <div className="divider-1">


            </div>


        </div>
      </div>

     
    </div>
  );
}
