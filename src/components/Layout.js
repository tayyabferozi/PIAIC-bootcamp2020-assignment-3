import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import { clearCart, setCurrentCategory } from "../context/actionCreators";
import isEmpty from "../utilities/is-empty";

const Layout = ({ minimal, children }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [itemModelActiveState, setItemModelActiveState] = useState(false);
  const [sidenavShowState, setSidenavShowState] = useState(false);

  const cartClickHandler = () => {
    setItemModelActiveState(true);
  };

  const menuClickHandler = () => {
    setSidenavShowState((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`dark-overlay ${sidenavShowState ? "active" : ""}`}
        onClick={menuClickHandler}
      ></div>
      <nav className="shop-nav">
        <Link to="/">
          <img src="../assets/img/shoe-dark.png" className="logo" alt="logo" />
        </Link>
        <div className="show-sm">
          <div className="hamburger" onClick={menuClickHandler}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        {!minimal && (
          <div className="categories hide-sm">
            <h3
              onClick={() => {
                dispatch(setCurrentCategory("men"));
              }}
            >
              <span
                className={`${
                  state.currentCategory === "men" ? "selected" : ""
                }`}
              >
                Men
              </span>
            </h3>
            <h3
              onClick={() => {
                dispatch(setCurrentCategory("women"));
              }}
            >
              <span
                className={`${
                  state.currentCategory === "women" ? "selected" : ""
                }`}
              >
                Women
              </span>
            </h3>
            <h3
              onClick={() => {
                dispatch(setCurrentCategory("kids"));
              }}
            >
              <span
                className={`${
                  state.currentCategory === "kids" ? "selected" : ""
                }`}
              >
                Kids
              </span>
            </h3>
          </div>
        )}
        {minimal ? (
          <Link className="shop-logo" to="/shop">
            <img
              style={{ width: "2.3rem" }}
              src="../assets/vector/shop-black.svg"
              alt="shop"
              className="logo"
            />
          </Link>
        ) : (
          <div className="my-cart hide-sm" onClick={cartClickHandler}>
            <div className="cart-icon">
              <span className="cart-count">{state.cart.length}</span>
              <img
                src="../assets/vector/shopping-cart.svg"
                alt="shopping-cart"
              />
            </div>
          </div>
        )}
        <div className={`side-nav ${sidenavShowState ? "active" : ""}`}>
          {!minimal && (
            <>
              <div className="my-cart">
                <div className="cart-icon" onClick={cartClickHandler}>
                  <span className="cart-count">{state.cart.length}</span>
                  <img
                    src="../assets/vector/shopping-cart.svg"
                    alt="shopping-cart"
                  />
                </div>
                <h4>My Cart</h4>
              </div>
              <div className="categories">
                <h3>
                  <span
                    className={`men-tab ${
                      state.currentCategory === "men" ? "selected" : ""
                    }`}
                    onClick={() => {
                      dispatch(setCurrentCategory("men"));
                    }}
                  >
                    Men
                  </span>
                </h3>
                <h3>
                  <span
                    className={`women-tab ${
                      state.currentCategory === "women" ? "selected" : ""
                    }`}
                    onClick={() => {
                      dispatch(setCurrentCategory("women"));
                    }}
                  >
                    Women
                  </span>
                </h3>
                <h3>
                  <span
                    className={`kids-tab ${
                      state.currentCategory === "kids" ? "selected" : ""
                    }`}
                    onClick={() => {
                      dispatch(setCurrentCategory("kids"));
                    }}
                  >
                    Kids
                  </span>
                </h3>
              </div>
            </>
          )}
          {minimal && (
            <div className="categories">
              <Link to="/shop" style={{ display: "flex" }}>
                <img
                  style={{ width: "2rem" }}
                  src="../assets/vector/shop-black.svg"
                  alt="Shop"
                />
                <h3>Shop</h3>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Items Model */}
      <div
        className={`dark-overlay-modal ${itemModelActiveState ? "active" : ""}`}
        onClick={() => setItemModelActiveState(false)}
      ></div>

      <div className={`items-modal ${itemModelActiveState ? "active" : ""}`}>
        <div className="title">
          <h3>
            My Cart
            <span
              className="close"
              onClick={() => setItemModelActiveState(false)}
            >
              &times;
            </span>
          </h3>
        </div>
        <div className="body">
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {!isEmpty(state.cart) && (
                <>
                  {state.cart.map((el) => {
                    return (
                      <tr key={el.id}>
                        <td>{el.itemName}</td>
                        <td>{el.price}</td>
                        <td>{el.quantity}</td>
                        <td>{el.amount}</td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
          <div>
            <strong>Shipping Cost:</strong> <strong>$ 0/-</strong>
          </div>
          <strong>Grand Total:</strong>
          <strong>
            ${" "}
            {state.cart.reduce((prevVal, el) => {
              return prevVal + el.amount;
            }, 0)}
            /-
          </strong>
          <div className="btn-container">
            <button
              className="btn-red-outline"
              onClick={() => dispatch(clearCart())}
            >
              Clear My Cart
            </button>
            <button className="btn-green-outline">Proceed to Checkout</button>
          </div>
        </div>
      </div>
      {children}
      <footer className="shop-footer">
        <div>
          <h4>
            <Link to="/about">About Us</Link>
          </h4>
          <h4>
            <Link to="/shop">Shop</Link>
          </h4>
        </div>
        <div>
          <h3>Follow Up</h3>
          <img
            src="../assets/vector/facebook.svg"
            alt="facebook"
            className="social-icon"
          />
          <img
            src="../assets/vector/twitter.svg"
            alt="twitter"
            className="social-icon"
          />
          <img
            src="../assets/vector/whatsapp.svg"
            alt="whatsapp"
            className="social-icon"
          />
          <img
            src="../assets/vector/instagram.svg"
            alt="instagram"
            className="social-icon"
          />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
