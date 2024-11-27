"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type PopulationChartProps = {
  population: Array<{ year: number; population: number }>;
};

const PopulationChart: React.FC<PopulationChartProps> = ({ population }) => {
  const populationData = {
    labels: population.map((pop) => pop.year),
    datasets: [
      {
        label: "Population",
        data: population.map((pop) => pop.population),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const populationOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Population Over Time",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `Population: ${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-6">
      <p className="text-lg font-semibold text-gray-900">
        Population Over Time:
      </p>
      <div className="w-full mt-4">
        <Line data={populationData} options={populationOptions} />
      </div>
    </div>
  );
};

export default PopulationChart;
