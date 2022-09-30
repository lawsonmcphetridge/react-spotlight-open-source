import React from 'react';
import { Bar } from 'react-chartjs-2';
// breaking CI, needed for chart to work
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';

export default function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

