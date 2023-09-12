import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Hero/hero.css";

export default function Hero() {
  var Nav = useNavigate();

  function toggleRegPage() {
    Nav("/register");
  }

  return (
    <div className="Slider">
      <p>"Reading can take you places where you have never been before"</p>
      <span>Dr. Theodor Seuss</span>

      <div className="sign-btn-2" onClick={toggleRegPage}>
        <Link to="/register">Register now</Link>
      </div>
    </div>
  );
}
