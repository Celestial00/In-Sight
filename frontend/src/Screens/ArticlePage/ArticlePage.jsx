import React from "react";
import "../ArticlePage/ArticlePage.css";
import img from "../../Assets/pro.jpg";
import { GrLike } from "react-icons/gr";
import { BiComment } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";

export default function Article() {
  return (
    <div className="Article-Page">
      <div className="user-intro">
        <div className="Image">
          <img src={img} alt="" />
        </div>

        <div className="user-name-date">
          <h4>jacob smith</h4>
          <h4>Date</h4>
        </div>
      </div>

      <div className="article-info">
        <div className="Article-title">
          <h1>
            The Art of Visual Communication: Exploring the World of Graphic
            Design
          </h1>
        </div>

        <div className="Article-Content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quas
            consequatur aperiam voluptas velit dolores modi est! Nisi, culpa
            dolorem aliquam omnis cum, earum ea aspernatur corporis dolorum
            nulla voluptates, nihil autem sint. Voluptatum iste totam, fugiat
            asperiores eveniet sed in culpa sint enim, velit commodi quibusdam
            tenetur incidunt? Reiciendis ipsa reprehenderit beatae itaque quas
            amet molestiae animi blanditiis dicta tenetur aut aliquam voluptate
            cupiditate, esse velit culpa fugiat, fuga, quidem alias optio veniam
            molestias. Dicta vitae mollitia consectetur vel at labore quaerat!
            Quo veniam quia nobis pariatur deleniti magnam explicabo recusandae
            quaerat nulla cumque cupiditate dolore in laboriosam illo
            doloremque, eveniet tempora esse voluptatibus provident ex autem
            enim? Voluptates ullam animi quis. Suscipit, neque aliquam obcaecati
            quaerat adipisci maiores illo ut impedit optio ipsam quas eum,
            laboriosam assumenda, modi doloribus asperiores mollitia odit
            deserunt libero nemo quo ipsum sequi! Debitis sapiente error,
            voluptatibus laboriosam, ducimus ipsam eaque sit soluta id assumenda
            est minus ratione delectus magni minima explicabo exercitationem
            illo nam perspiciatis neque ad porro. Dolores unde optio nisi atque
            consequatur similique perferendis. Deserunt tenetur illo
            perspiciatis asperiores animi dignissimos, officia ducimus iure sint
            dolorum pariatur rem illum saepe, quaerat distinctio laudantium ab.
            Alias tempore mollitia culpa aliquid quia.
          </p>
        </div>
      </div>

      <div className="Article-Icons">
        <div className="like-comment">
          <GrLike className="Article-pg-icons" />
          <BiComment className="Article-pg-icons" />
        </div>

        <div className="bookmark">
          <BsBookmark className="Article-pg-icons" />
        </div>
      </div>
    </div>
  );
}
