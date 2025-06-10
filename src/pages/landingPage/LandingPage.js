import React, { useEffect, useState } from "react";
import Styles from "./LandingPage.module.css";
import CircularChart from "../../components/circularChart/CircularChart";
import RecentTransactions from "../../components/recentTransactions/RecentTransactions";
import Bars from "../../components/bars/Bars";
import BalanceModal from "../../components/balanceModal/BalanceModal";
import ExpenseModal from "../../components/expenseModal/ExpenseModal";

const data1 = [
  {
    id: 1,
    name: "Entertainment",
    value: 1500,
    specific: "Movie",
    date: "March 31, 2024",
  },
  {
    id: 2,
    name: "Food",
    value: 1398,
    specific: "Samosa",
    date: "March 31, 2024",
  },
  {
    id: 3,
    name: "Travel",
    value: 2400,
    specific: "France",
    date: "March 31, 2024",
  },
];

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [expenseDetail, setExpenseDetail] = useState(
    JSON.parse(localStorage.getItem("expenseDetail")) || [
      {
        id: Math.random(),
        specific: "samosa",
        name: "Food",
        value: 500,
        date: "March 31, 2024",
      },
    ]
  );
  const [initBalance, setInitBalance] = useState(5000);
  const [expenses, setExpenses] = useState(
    expenseDetail.reduce((acc, ini) => acc + parseInt(ini.value), 0)
  );
  const [walletBalance, setWalletBalance] = useState(
    localStorage.getItem("walletBalance") || initBalance - expenses
  );

  useEffect(() => {
    localStorage.setItem("initBalance", initBalance);
    localStorage.setItem("expenses", expenses);
    localStorage.setItem("walletBalance", walletBalance);
    localStorage.setItem("expenseDetail", JSON.stringify(expenseDetail));
  }, []);

  useEffect(() => {
    const entertainment = expenseDetail
      .filter((ele) => ele.name === "Entertainment")
      .reduce((acc, ini) => acc + parseInt(ini.value), 0);
    const food = expenseDetail
      .filter((ele) => ele.name === "Food")
      .reduce((acc, ini) => acc + parseInt(ini.value), 0);
    const travel = expenseDetail
      .filter((ele) => ele.name === "Travel")
      .reduce((acc, ini) => acc + parseInt(ini.value), 0);
    setData([
      {
        name: "Entertainment",
        value: entertainment,
      },
      {
        name: "Food",
        value: food,
      },
      {
        name: "Travel",
        value: travel,
      },
    ]);
  }, [expenseDetail, expenses]);

  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);

  return (
    <div style={{ position: "absolute", width: "100vw" }}>
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
                <span style={{ color: "greenyellow" }}>
                  &#8377;{walletBalance}
                </span>
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
                onClick={() => setOpenWalletModal(true)}
              >
                + Add Income
              </button>
            </div>
            <div className={Styles.income}>
              <h2 style={{ color: "white" }}>
                Expenses:
                <span style={{ color: "#F4BB4A" }}>&#8377;{expenses}</span>
              </h2>
              <button
                type="button"
                style={{
                  background:
                    "linear-gradient(90deg, #FF9595, #FF4747, #FF3838)",
                  width: "120px",
                  height: "40px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => setOpenExpenseModal(true)}
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
              <RecentTransactions data={expenseDetail} />
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
      <div className={Styles.modal}>
        {openWalletModal && (
          <BalanceModal
            closeModal={setOpenWalletModal}
            setWalletBalance={setWalletBalance}
          />
        )}
      </div>
      <div className={Styles.modal}>
        {openExpenseModal && (
          <ExpenseModal
            closeModal={setOpenExpenseModal}
            setExpenseDetail={setExpenseDetail}
            setWalletBalance={setWalletBalance}
            setExpenses={setExpenses}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
