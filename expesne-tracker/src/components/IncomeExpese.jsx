import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";

export default function IncomeExpese() {
  const { transaction } = useContext(GlobalStateContext);
  const amount = transaction.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}
