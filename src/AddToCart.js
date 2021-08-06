import React from "react";

const AddToCart = () => {
  return (
    <div className="cart-modal">
      <div className="title">
        <h3>
          Add To Cart
          <span className="close">&times;</span>
        </h3>
      </div>
      <div className="body">
        <label>
          Item Name:
          <span className="name-holder"></span>
        </label>
        <label for="quantity">
          Quantity:
          <input
            type="number"
            name="quantity"
            min="1"
            value="1"
            id="quantity"
            autofocus
          />
        </label>
        <label>
          Price: Rs. <span className="price-holder"></span>/-
        </label>
        <label>
          Amount: Rs. <span className="amount-holder"></span>/- (for this item
          only)
        </label>
        <button className="btn-green-outline">Add To Cart</button>
      </div>
    </div>
  );
};

export default AddToCart;
