'use client';

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartDataset,
  Filler
} from "chart.js";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export interface LineChartProps {
  data: ChartDataset<'line'>[];
  chartLabels: string[];
};

export const LineChart = ({
  chartLabels,
  data
}: LineChartProps) => {
  const normalizedChartData = useMemo<ChartDataset<'line'>[]>(() => {
    return data.map((chartData, index) => ({
      ...chartData,
      yAxisID: index === 0 ? 'y' : 'y1'
    }))
  }, [data]);

  return (
    <Line
      width='100%'
      data={{
        labels: chartLabels,
        datasets: normalizedChartData,
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right'
          }
        }
      }}
    />
  )
}
