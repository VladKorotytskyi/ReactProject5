import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { GraphicContainer, ChartTitle } from "./Graphic.styled.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const Graphic = ({ temp = 15 }) => {
  const labels = [
    "11 pm",
    "Oct 14",
    "1 am",
    "2 am",
    "3 am",
    "4 am",
    "5 am",
    "6 am",
    "7 am",
    "8 am",
    "9 am",
    "10 am",
    "11 am",
    "12 am",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
  ];

  const dynamicData = useMemo(() => {
    return [
      temp - 2,
      temp - 3,
      temp - 4.5,
      temp - 5,
      temp - 5.5,
      temp - 5,
      temp - 4,
      temp - 2,
      temp - 1,
      temp + 1,
      temp + 3,
      temp + 5,
      temp + 7,
      temp + 8,
      temp + 9,
      temp + 10,
      temp + 11,
      temp + 11.5,
      temp + 11.8,
      temp + 12,
    ];
  }, [temp]);

  const data = {
    labels,
    datasets: [
      {
        data: dynamicData,
        fill: true,
        backgroundColor: "rgba(255, 179, 108, 0.15)",
        borderColor: "#FFB36C",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        suggestedMin: Math.min(...dynamicData) - 2,
        suggestedMax: Math.max(...dynamicData) + 2,
        grid: { color: "rgba(0, 0, 0, 0.05)", drawBorder: false },
        ticks: { callback: (value) => `${value}°C`, color: "#333" },
      },
      x: {
        position: "top",
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
        ticks: { color: "#333" },
      },
    },
  };

  return (
    <GraphicContainer>
      <ChartTitle>Hourly forecast</ChartTitle>
      <div style={{ height: "350px", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </GraphicContainer>
  );
};
