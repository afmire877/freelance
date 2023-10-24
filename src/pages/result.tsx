import React, { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import useQuizStore from "~/store/quizStore";

import * as R from "ramda"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export const data = {
  labels: ["SALES", "MARKETING", "FINANCE", "LEGAL", "ADMIN", "PORTFOLIO"],
  datasets: [
    {
      label: "Confidence",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "competence",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export default function Result() {
  const bank = useQuizStore((e) => e.bank);

  const calculateResult = () => {
    // labels: ["SALES", "MARKETING", "FINANCE", "LEGAL", "ADMIN", "PORTFOLIO"],
    const confidenceScore = bank.
  };

  return <Radar data={data} />;
}
