import React from "react";
import Styles from "./LandingPage.module.css";
import CircularChart from "../../components/circularChart/CircularChart";
import RecentTransactions from "../../components/recentTransactions/RecentTransactions";
import Bars from "../../components/bars/Bars";

const data = [
  {
    name: "Entertainment",
    value: 1500,
    specific: "Movie",
    date: "March 31, 2024",
  },
  {
    name: "Food",
    value: 1398,
    specific: "Samosa",
    date: "March 31, 2024",
  },
  {
    name: "Travel",
    value: 2400,
    specific: "France",
    date: "March 31, 2024",
  },
];

const LandingPage = () => {
  return (
    <div className={Styles.outer}>
      <div className={Styles.container}>
        <h1
          style={{
            color: "white",
            margin: "0",
            padding: "15px 0",
          }}
        >
          Expense Tracker
        </h1>
        <div className={Styles.innerContainer1}>
          <div className={Styles.income}>
            <h2 style={{ color: "white" }}>
              Wallet Balance:
              <span style={{ color: "greenyellow" }}>&#8377;4500</span>
            </h2>
            <button
              type="button"
              style={{
                background: "linear-gradient(90deg, #B5DC52, #89E148)",
                width: "120px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              + Add Income
            </button>
          </div>
          <div className={Styles.income}>
            <h2 style={{ color: "white" }}>
              Expenses: <span style={{ color: "#F4BB4A" }}>&#8377;500</span>
            </h2>
            <button
              type="button"
              style={{
                background: "linear-gradient(90deg, #FF9595, #FF4747, #FF3838)",
                width: "120px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              + Add Expense
            </button>
          </div>
          <div>
            <CircularChart data={data} />
          </div>
        </div>
        <div className={Styles.innerContainer2}>
          <div className={Styles.transaction}>
            <h2 style={{ margin: "0" }}>
              <em style={{ color: "white" }}>Recent Transactions</em>
            </h2>
            <RecentTransactions data={data} />
          </div>
          <div className={Styles.expenses}>
            <h2 style={{ margin: "0" }}>
              <em style={{ color: "white" }}>Top Expenses</em>
            </h2>
            <Bars data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
