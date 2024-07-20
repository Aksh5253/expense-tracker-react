import React, { createContext, useReducer, useContext } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transaction: [],
};

// Create  context
export const GlobalStateContext = createContext(initialState);

// provide components
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  // Add transaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalStateContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
