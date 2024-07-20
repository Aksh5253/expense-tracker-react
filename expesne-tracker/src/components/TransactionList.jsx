import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalStateContext } from "../context/GlobalState";
export default function TransactionList() {
  const { transaction } = useContext(GlobalStateContext);
  return (
    <>
      <h3>History</h3>

      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
