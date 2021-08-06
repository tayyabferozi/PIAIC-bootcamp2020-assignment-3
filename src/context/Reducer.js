import * as actionTypes from "./actionTypes";

export const initialState = {
  currentCategory: "men",
  cart: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.category,
        cart: [...state.cart],
      };
    case actionTypes.SET_CART_ITEM:
      console.log(action);
      const prevCart = state.cart;
      let newCart;
      const index = prevCart.findIndex((el) => el.id === action.item.id);
      if (action.item.quantity === 0) {
        return state;
      }
      if (index >= 0) {
        prevCart[index] = action.item;
        newCart = [...prevCart];
      } else {
        newCart = [...prevCart, action.item];
      }
      return {
        ...state,
        cart: newCart,
      };
    case actionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.itemId),
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
