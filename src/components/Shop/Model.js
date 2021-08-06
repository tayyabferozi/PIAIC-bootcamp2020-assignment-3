import React, { useState, useContext } from "react";

import { GlobalContext } from "../../context/GlobalState";
import { setCartItem } from "../../context/actionCreators";

const Models = ({
  itemsModelActive,
  cartModelActive,
  onModelClose,
  selectedItem,
}) => {
  const { dispatch } = useContext(GlobalContext);
  const [chosenQuantityState, setChosenQuantityState] = useState(1);

  const quantityChangeHandler = (e) => {
    const { value } = e.target;
    setChosenQuantityState(value);
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    onModelClose();
    dispatch(
      setCartItem({
        id: selectedItem.id,
        itemName: selectedItem.name,
        price: selectedItem.price,
        quantity: chosenQuantityState,
        amount: (selectedItem.price || 0) * chosenQuantityState,
      })
    );
    setChosenQuantityState(1);
  };

  return (
    <>
      <form>
        <div
          className={`dark-overlay-modal ${
            cartModelActive || itemsModelActive ? "active" : ""
          }`}
          onClick={onModelClose}
        ></div>

        {/* Cart Model */}

        <div className={`cart-modal ${cartModelActive ? "active" : ""}`}>
          <div className="title">
            <h3>
              Add To Cart
              <span className="close" onClick={onModelClose}>
                &times;
              </span>
            </h3>
          </div>
          <div className="body">
            <label>
              Item Name:{" "}
              <span className="name-holder">{selectedItem.name}</span>
            </label>
            <label htmlFor="quantity">
              Quantity:{" "}
              <input
                type="number"
                name="quantity"
                min="1"
                value={chosenQuantityState}
                onChange={quantityChangeHandler}
                id="quantity"
                autoFocus
              />
            </label>
            <label>
              Price: Rs.{" "}
              <span className="price-holder">{selectedItem.price}</span>/-
            </label>
            <label>
              Amount: Rs.{" "}
              <span className="amount-holder">
                {(selectedItem.price || 0) * chosenQuantityState}
              </span>
              /-
            </label>
            <button className="btn-green-outline" onClick={addToCartHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Models;
