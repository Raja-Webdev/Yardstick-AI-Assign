import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState();

  const fetchData = async () => {
    const { data } = await axios.get("http://127.0.0.1:5000/api/transactions");
    console.log(data);
    setTransactions(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!transactions ? (
        <div>loading</div>
      ) : (
        transactions.map((each) => <p>{each.amount}</p>)
      )}
    </>
  );
}

export default App;
