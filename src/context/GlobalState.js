import React, { createContext, useReducer } from "react";
import { initialState, Reducer } from "./Reducer";

export const GlobalContext = createContext({ state: null, dispatch: () => {} });

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
