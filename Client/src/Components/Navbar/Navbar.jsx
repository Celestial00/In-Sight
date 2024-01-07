import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import pro from "../../Assets/pro.jpg";
import { UserContext } from "../../context/userContext";

export default function Navbar(props) {
  var isHome = props.isit;
  var Nav = useNavigate();


  function toggleRegPage() {
    Nav("/register");
  }

  function toggleEditor() {
    Nav("/articleeditor");
  }

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
                  <Link to="/login"> Sign in </Link>
                </li>
                <li>
                  <Link to="/AboutUs"> About us </Link>
                </li>
              </ul>
            </div>

            <div className="sign-btn" onClick={toggleRegPage}>
              <p>Join Now!</p>
            </div>
          </>
        ) : (
          <>
            <div className="User-info">
              <div className="write-pec">
                <BsPencilSquare className="settings" onClick={toggleEditor} />
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
