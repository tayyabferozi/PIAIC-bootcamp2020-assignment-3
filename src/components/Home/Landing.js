import React from "react";

import { Link } from "react-router-dom";
import "./imageSlides";

const Landing = () => {
  return (
    <section className="landing">
      <nav className="landing-navbar">
        <div className="brand">
          <Link to="/">
            <img src="assets/img/shoe-white.png" alt="t-shirt vector" />
          </Link>
        </div>
        <div className="landing-nav">
          <Link to="/about">About Us</Link>
          <Link to="/shop">
            <img src="assets/vector/shop.svg" alt="shop" />
          </Link>
        </div>
      </nav>

      <div className="landing-content">
        <div style={{ marginRight: 50 }}>
          <h1>
            Has <span className="corona">CORONA</span> Reached Your City Too?
          </h1>
          <h3>Don't Worry, We Have Something Special For You .</h3>
        </div>
        <ul className="landing-img-wrap">
          <li className="landing-img">
            <img src="assets/img/landing-image-1.png" alt="men shirt" />
          </li>
          <li className="landing-img">
            <img src="assets/img/landing-image-2.png" alt="kids shirt" />
          </li>
          <li className="landing-img">
            <img src="assets/img/landing-image-3.png" alt="kids shirt" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Landing;
