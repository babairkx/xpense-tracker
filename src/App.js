// import logo from "./logo.svg";
// import "./App.css";
import Bars from "./components/bars/Bars";
import CircularChart from "../src/components/circularChart/CircularChart";
import Transactions from "./components/transactions/Transactions";
import RecentTransactions from "./components/recentTransactions/RecentTransactions";
import LandingPage from "./pages/landingPage/LandingPage";

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
}

export default App;
