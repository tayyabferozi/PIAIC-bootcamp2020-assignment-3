import React, { useState, useContext } from "react";

import Product from "./Product";
import Models from "./Model";
import { GlobalContext } from "../../context/GlobalState";
import { products } from "../../constants/constants";

const Shop = () => {
  const { state } = useContext(GlobalContext);
  const [cartModelActiveState, setCartModelActiveState] = useState(false);
  const [itemsModelActiveState, setItemsModelActiveState] = useState(false);
  const [selectedItemState, setSelectedItemState] = useState({});

  const modelCloseHandler = () => {
    setCartModelActiveState(false);
    setItemsModelActiveState(false);
  };

  const itemClickHandler = (item) => {
    setSelectedItemState(item);
    setCartModelActiveState(true);
  };

  return (
    <>
      <div className="shop-background-text">Shop</div>
      <Models
        cartModelActive={cartModelActiveState}
        itemsModelActive={itemsModelActiveState}
        onModelClose={modelCloseHandler}
        selectedItem={selectedItemState}
      />
      <main className="shop">
        <div className="card-container">
          {products
            .filter((el) => el.category === state.currentCategory)
            .map((el) => {
              return (
                <Product
                  key={el.id}
                  id={el.id}
                  onItemClick={itemClickHandler}
                  {...el}
                />
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Shop;
