import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import pro from "../../Assets/pro.jpg";

export default function Navbar(props) {
  var isHome = props.isit;

  return (
    <div className="Navbar">
      <div className="Logo">
        <h1>In-Sight</h1>
        
      </div>

      <div className="menu">
        {isHome == false ? (
          <>
            <div>
              <ul>
                <li>
                  <Link> Membership </Link>
                </li>
                <li>
                  <Link to="/login"> Sign in </Link>
                </li>
                <li>
                  <Link to="/blog"> Blog </Link>
                </li>
              </ul>
            </div>

            <div className="sign-btn">
              <p>Join Now!</p>
            </div>
          </>
        ) : (
          <>
            <div className="User-info">
              <div className="write-pec">
                <BsPencilSquare className="settings" />
              </div>

              <div className="profile-img">
                <img src={pro} alt="" srcset="" />
              </div>

              <div className="setting-icon">
                <IoSettingsOutline className="settings" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
