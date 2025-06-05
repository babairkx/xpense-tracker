// import logo from "./logo.svg";
// import "./App.css";
import Bars from "./components/bars/Bars";
import CircularChart from "../src/components/circularChart/CircularChart";

const data = [
  {
    name: "Entertainment",
    value: 1500,
  },
  {
    name: "Food",
    value: 1398,
  },
  {
    name: "Travel",
    value: 2400,
  },
];

function App() {
  // return <Bars data={data} />;
  return <CircularChart data={data} />;
}

export default App;
