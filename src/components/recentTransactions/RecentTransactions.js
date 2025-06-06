import React, { useState } from "react";
import Transactions from "../transactions/Transactions";
import Style from "./RecentTransactions.module.css";
import Previous from "../../assets/prev.svg";
import Next from "../../assets/next.svg";

const RecentTransactions = ({ data }) => {
  const [curPage, setCurPage] = useState(1);
  const [entryPerPage] = useState(3);
  const lastIndex = curPage * entryPerPage;
  const firstIndex = lastIndex - entryPerPage;
  const slicedData = data.slice(firstIndex, lastIndex);
  return (
    <div
      style={{ backgroundColor: "white", padding: "5px", borderRadius: "10px" }}
    >
      {slicedData.map((ele) => (
        <Transactions
          name={ele.name}
          value={ele.value}
          specific={ele.specific}
          date={ele.date}
        />
      ))}

      <div className={Style.container}>
        <div
          className={Style.arrows}
          onClick={() => {
            if (curPage > 1) setCurPage(curPage - 1);
          }}
        >
          <img src={Previous} alt="previous_arrow" />
        </div>
        <div className={Style.curPage}>{curPage}</div>
        <div
          className={Style.arrows}
          onClick={() => {
            if (curPage < Math.ceil(data.length / entryPerPage))
              setCurPage(curPage + 1);
          }}
        >
          <img src={Next} alt="next_arrow" />
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
