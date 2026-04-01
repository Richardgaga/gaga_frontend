import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart() {
  const data = {
    labels: ["Candle1", "Candle2", "Candle3"],
    datasets: [
      {
        label: "EUR/USD Candles",
        data: [1.15, 1.16, 1.17],
        borderColor: "blue",
        backgroundColor: "lightblue",
      }
    ]
  };

  return <Line data={data} />;
}

export default Chart;
