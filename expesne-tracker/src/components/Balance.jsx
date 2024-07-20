import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";

export default function () {
  const { transaction } = useContext(GlobalStateContext);
  const amount = transaction.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  /*
   tofixed that means amount 12.5 is 12.50 and 13.2 is 13.20
   */
  return (
    <>
      <h4>Balance</h4>
      <h1>{total}</h1>
    </>
  );
}
