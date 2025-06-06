import React, { useState } from "react";
import Transactions from "../transactions/Transactions";
import Style from "./RecentTransactions.module.css";
import Previous from "../../assets/prev.svg";
import Next from "../../assets/next.svg";

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
  {
    name: "Food",
    value: 3500,
    specific: "Movie",
    date: "March 31, 2024",
  },
  {
    name: "Entertainment",
    value: 1998,
    specific: "Samosa",
    date: "March 31, 2024",
  },
  {
    name: "Travel",
    value: 200,
    specific: "France",
    date: "March 31, 2024",
  },
];

const RecentTransactions = () => {
  const [curPage, setCurPage] = useState(1);
  const [entryPerPage] = useState(3);
  const lastIndex = curPage * entryPerPage;
  const firstIndex = lastIndex - entryPerPage;
  const slicedData = data.slice(firstIndex, lastIndex);
  return (
    <div>
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
