// import logo from "./logo.svg";
// import "./App.css";
import Bars from "./components/bars/Bars";
import CircularChart from "../src/components/circularChart/CircularChart";
import Transactions from "./components/transactions/Transactions";
import RecentTransactions from "./components/recentTransactions/RecentTransactions";
import LandingPage from "./pages/landingPage/LandingPage";
import BalanceModal from "./components/balanceModal/BalanceModal";
import ExpenseModal from "./components/expenseModal/ExpenseModal";

const data = [
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
  {
    id: 4,
    name: "Food",
    value: 3500,
    specific: "Movie",
    date: "March 31, 2024",
  },
  {
    id: 5,
    name: "Entertainment",
    value: 1998,
    specific: "Samosa",
    date: "March 31, 2024",
  },
  {
    id: 6,
    name: "Travel",
    value: 200,
    specific: "France",
    date: "March 31, 2024",
  },
];

function App() {
  // return <Bars data={data} />;

  // return <CircularChart data={data} />;

  // return (
  //   <Transactions
  //     name={data[0].name}
  //     value={data[0].value}
  //     specific={data[0].specific}
  //     date={data[0].date}
  //   />
  // );

  // return (
  //   <>
  //     {data.map((ele) => (
  //       <Transactions
  //         name={ele.name}
  //         value={ele.value}
  //         specific={ele.specific}
  //         date={ele.date}
  //       />
  //     ))}
  //   </>
  // );

  // return <RecentTransactions data={data} />;

  return <LandingPage />;

  // return <BalanceModal />;

  // return <ExpenseModal />;
}

export default App;
