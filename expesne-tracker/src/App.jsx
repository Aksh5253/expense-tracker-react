import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpese from "./components/IncomeExpese";
import TransactionList from "./components/TransactionList";
import AddTransections from "./components/AddTransections";
import { GlobalStateProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpese />
        <TransactionList />
        <AddTransections />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
