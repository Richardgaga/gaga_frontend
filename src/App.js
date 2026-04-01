import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "./Chart";

function App() {
  const [eurusd, setEurusd] = useState(null);
  const [gbpusd, setGbpusd] = useState(null);

  useEffect(() => {
    axios.get("https://gaga-server.onrender.com/signal/EURUSD=X")
      .then(res => setEurusd(res.data.signal));
    axios.get("https://gaga-server.onrender.com/signal/GBPUSD=X")
      .then(res => setGbpusd(res.data.signal));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gaga Forex Signals</h1>

      <h2>EUR/USD</h2>
      {eurusd && (
        <div>
          <p>Action: {eurusd.action}</p>
          <p>Stop Loss: {eurusd.stop_loss}</p>
        </div>
      )}

      <h2>GBP/USD</h2>
      {gbpusd && (
        <div>
          <p>Action: {gbpusd.action}</p>
          <p>Stop Loss: {gbpusd.stop_loss}</p>
        </div>
      )}

      <Chart />
    </div>
  );
}

export default App;
