import React from "react";

import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="products">
      <div className="products-text">
        <h1>Look What We Have Got For You</h1>
        <h3>Gift Your Beloved Ones The Best Of Our Products This Eid</h3>
      </div>
      <div className="card-container">
        <div className="card">
          <h4>Men's Collection</h4>
          <img src="assets/img/landing-image-1.png" alt="men-collection" />
        </div>
        <div className="card">
          <h4>Kid's Collection</h4>
          <img src="assets/img/stock/kids/showcase.png" alt="kid-collection" />
        </div>
        <div className="card">
          <h4>Women's Collection</h4>
          <img
            src="assets/img/stock/women/showcase.png"
            alt="women-collection"
          />
        </div>
      </div>
      <Link to="/shop">
        <h3>Shop Now!</h3>
      </Link>
    </section>
  );
};

export default Products;
