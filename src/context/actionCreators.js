import {
  SET_CURRENT_CATEGORY,
  DELETE_CART_ITEM,
  SET_CART_ITEM,
  CLEAR_CART,
} from "./actionTypes";

export const setCartItem = (item) => {
  return {
    type: SET_CART_ITEM,
    item,
  };
};

export const deleteCartItem = (cartId) => {
  return {
    type: DELETE_CART_ITEM,
    cartId,
  };
};

export const setCurrentCategory = (category) => {
  return {
    type: SET_CURRENT_CATEGORY,
    category,
  };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};
