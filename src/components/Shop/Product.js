import React from "react";

const Product = ({ id, category, name, img, price, onItemClick }) => {
  return (
    <div className={`card ${category}`}>
      <img src={`assets/img/stock/${category}/${img}`} alt={name} />
      <h4>
        <span className="name">{name}</span>
      </h4>
      <h4>
        $ <span className="price"> {price}</span>/-
      </h4>
      <div
        className="options"
        onClick={() => onItemClick({ id, name, category, price })}
      >
        <div className="add-to-cart">+</div>
      </div>
    </div>
  );
};

export default Product;
