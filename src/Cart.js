import React from "react";

const Cart = () => {
  return (
    <div className="items-modal">
      <div className="title">
        <h3>
          My Cart
          <span className="close">&times;</span>
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
          <tbody></tbody>
          <tfoot></tfoot>
        </table>
        <div className="btn-container">
          <button className="btn-red-outline">Clear My Cart</button>
          <button
            className="btn-green-outline"
            onclick="window.location='checkout.html'"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
