import React, { useEffect, useState } from "react";
import Styles from "./BalanceModal.module.css";

const BalanceModal = ({ closeModal, setWalletBalance }) => {
  const [addedBalance, setAddedBalance] = useState(0);

  const addBalanceHandler = () => {
    const walletBalance = parseInt(localStorage.getItem("walletBalance"));
    const totalBalance = parseInt(walletBalance) + parseInt(addedBalance);
    localStorage.setItem("addedBalance", addedBalance);
    localStorage.setItem("walletBalance", totalBalance);
    setWalletBalance(totalBalance);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.modalContainer}>
        <h2 style={{ margin: "0", marginBottom: "10px" }}>Add Balance</h2>
        <form>
          <input
            type="number"
            placeholder="Income Amount"
            onChange={(e) => setAddedBalance(e.target.value)}
            required={true}
            style={{
              height: "40px",
              width: "170px",
              border: "1px solid gray",
              borderRadius: "15px",
              textAlign: "center",
              marginRight: "20px",
              boxShadow: "0px 4px 4px 4px gray",
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addBalanceHandler();
              if (addedBalance) closeModal(false);
            }}
            style={{
              height: "40px",
              width: "100px",
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
            Add Balance
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeModal(false);
            }}
            style={{
              height: "40px",
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
  );
};

export default BalanceModal;
