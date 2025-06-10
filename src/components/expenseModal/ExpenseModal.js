import React, { useState } from "react";
import Styles from "./ExpenseModal.module.css";

const ExpenseModal = ({
  closeModal,
  setExpenseDetail,
  setWalletBalance,
  setExpenses,
}) => {
  const [specific, setSpecific] = useState(null);
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);

  const submitHandler = () => {
    console.log(new Date(date).toString());
    const expenseDetail = JSON.parse(localStorage.getItem("expenseDetail"));
    const expense = {
      id: Math.random(),
      specific,
      value,
      name,
      date,
    };
    expenseDetail.push(expense);
    const expenses = expenseDetail.reduce(
      (acc, ini) => acc + parseInt(ini.value),
      0
    );
    const walletBalance =
      parseInt(localStorage.getItem("walletBalance")) - value;
    if (walletBalance >= 0) {
      localStorage.setItem("expenseDetail", JSON.stringify(expenseDetail));
      setExpenseDetail(expenseDetail);
      localStorage.setItem("walletBalance", walletBalance);
      localStorage.setItem("expenses", expenses);
      setWalletBalance(walletBalance);
      setExpenses(expenses);
    } else {
      expenseDetail.pop();
    }
  };

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.modalContainer}>
          <h2 style={{ margin: "0", marginBottom: "10px" }}>Add Expenses</h2>
          <form>
            <input
              name="title"
              type="text"
              placeholder="Title"
              required={true}
              style={{
                height: "40px",
                width: "170px",
                border: "none",
                borderRadius: "15px",
                textAlign: "center",
                margin: "0 15px 15px 0",
                boxShadow: "0px 4px 4px 4px gray",
              }}
              onChange={(e) => setSpecific(e.target.value)}
            />
            <input
              name="price"
              type="number"
              placeholder="Price"
              required={true}
              style={{
                height: "40px",
                border: "none",
                width: "170px",
                borderRadius: "15px",
                textAlign: "center",
                margin: "0 15px 15px 0",
                boxShadow: "0px 4px 4px 4px gray",
              }}
              onChange={(e) => setValue(e.target.value)}
            />
            <select
              style={{
                height: "40px",
                border: "none",
                width: "175px",
                borderRadius: "15px",
                textAlign: "center",
                margin: "0 15px 15px 0",
                boxShadow: "0px 4px 4px 4px gray",
              }}
              name="category"
              id="category"
              onChange={(e) => setName(e.target.value)}
              required={true}
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              name="date"
              type="date"
              placeholder="dd/mm/yy"
              required={true}
              style={{
                height: "40px",
                border: "none",
                width: "170px",
                borderRadius: "15px",
                textAlign: "center",
                margin: "0 15px 15px 0",
                boxShadow: "0px 4px 4px 4px gray",
              }}
              onChange={(e) => setDate(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (!!name && !!specific && !!date && !!value)
                  closeModal(false);
                submitHandler();
              }}
              style={{
                height: "40px",
                border: "none",
                width: "170px",
                border: "1px solid gray",
                borderRadius: "15px",
                textAlign: "center",
                marginRight: "20px",
                boxShadow: "0px 4px 4px 4px gray",
                color: "white",
                background: "#F4BB4A",
                cursor: "pointer",
              }}
            >
              Add Expense
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                closeModal(false);
              }}
              style={{
                height: "40px",
                border: "none",
                width: "100px",
                border: "1px solid gray",
                borderRadius: "15px",
                textAlign: "center",
                marginRight: "20px",
                boxShadow: "0px 4px 4px 4px gray",
                background: "#D9D9D9",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
