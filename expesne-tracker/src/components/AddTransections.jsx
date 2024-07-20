import React from "react";
import { useState, useContext } from "react";
import { GlobalStateContext } from "../context/GlobalState";

export default function AddTransections() {
  const { addTransaction } = useContext(GlobalStateContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new Transection</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            valule={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text....."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative-expense, positive-income)
          </label>
          <input
            type="number"
            valule={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={0}
          />
        </div>
        <button className="btn"> Submit</button>
      </form>
    </>
  );
}
