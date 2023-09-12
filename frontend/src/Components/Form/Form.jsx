import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Form.css";

export default function Form(props) {
  var isSignIn = props.page;

  return (
    <div className="Form">
      {isSignIn === true ? (
        <>
          <div className="Form-intro">
            <h1>Sign in</h1>
          </div>

          <div className="input-tags">
            <input
              type={"email"}
              placeholder="Email"
              className="input-useremail"
            />

            <input
              type={"password"}
              placeholder="Password"
              className="input-userpassword"
            />
          </div>

          <div className="Form-btn">
            <p>Sign in</p>
          </div>

          <div className="register-link">
            <Link to="/register">Don't have a account? Sign Up Now!</Link>
          </div>

          <div className="Form-icons">
            <div className="Icon">
              <AiOutlineGoogle className="mini-icon" />
            </div>

            <div className="Icon">
              <FaFacebookF className="mini-icon" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Form-intro">
            <h1>Sign Up</h1>
          </div>

          <div className="input-tags">
            <input
              type={"text"}
              placeholder="User Name"
              className="input-useremail"
            />

            <input
              type={"email"}
              placeholder="Email"
              className="input-useremail"
            />

            <input
              type={"password"}
              placeholder="Password"
              className="input-userpassword"
            />

            <input
              type={"password"}
              placeholder="Retype Password"
              className="input-userpassword"
            />
          </div>

          <div className="Form-btn">
            <p>Sign Up</p>
          </div>

          <div className="register-link">
            <Link to="/login">Already have a account? Sign In</Link>
          </div>

          <div className="Form-icons">
            <div className="Icon">
              <AiOutlineGoogle className="mini-icon" />
            </div>

            <div className="Icon">
              <FaFacebookF className="mini-icon" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
