import React from "react";
import Styles from "./Transactions.module.css";
import Food from "../../assets/Pizza_light.svg";
import Travel from "../../assets/suitcase_light.svg";
import Entertainment from "../../assets/Gift_light.svg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";

const Transactions = ({ name, value, specific, date }) => {
  const editHandler = () => {};
  const deleteHandler = () => {};
  return (
    <div className={Styles.container}>
      <div className={Styles.dataAndIcon}>
        <div className={Styles.icon}>
          <img
            src={
              name === "Entertainment"
                ? Entertainment
                : name === "Food"
                ? Food
                : Travel
            }
            alt={name}
          />
        </div>
        <div>
          <p className={Styles.data}>{specific}</p>
          <p className={`${Styles.data} ${Styles.textColor}`}>{date}</p>
        </div>
      </div>
      <div className={Styles.valueAndIcon}>
        <div className={Styles.value}>&#8377;{value}</div>
        <div className={Styles.editOrDelete}>
          <div
            className={`${Styles.icon2} ${Styles.deleteIconColor}`}
            onClick={deleteHandler}
          >
            <IoCloseCircleOutline />
          </div>
          <div
            className={`${Styles.icon2} ${Styles.editIconColor}`}
            onClick={editHandler}
          >
            <MdOutlineModeEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
