"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PriceHistoryGraph({ priceHistory }) {
  const validPriceData = priceHistory
    .filter(entry => entry.price !== null)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const labels = validPriceData.map(entry => entry.date);
  const prices = validPriceData.map(entry => entry.price);

  const averagePrice = prices.length > 0 ? prices.reduce((sum, price) => sum + price, 0) / prices.length : 0;
  const totalPriceChange = prices.length > 1 ? prices[prices.length - 1] - prices[0] : 0;
  const highestPrice = prices.length > 0 ? Math.max(...prices) : 0;
  const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const highestPriceEntry = validPriceData.find(entry => entry.price === highestPrice) || { date: "N/A" };
  const lowestPriceEntry = validPriceData.find(entry => entry.price === lowestPrice) || { date: "N/A" };
  const overallPriceChangeRate = validPriceData.reduce((sum, entry) => sum + (entry.priceChangeRate || 0), 0);
  const trend = overallPriceChangeRate > 0 ? "increasing" : overallPriceChangeRate < 0 ? "decreasing" : "stable";

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Price History',
        data: prices,
        borderColor: '#D4A017',
        pointBackgroundColor: '#D4A017',
        pointBorderColor: '#D4A017',
        fill: true,
        backgroundColor: 'rgba(212, 160, 23, 0.2)', // #D4A017 with 20% opacity
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333333',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Price History Over Time',
        color: '#333333',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333333',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#333333',
          callback: (value) => `$${value.toLocaleString()}`,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <section className="py-12 bg-[#1A3C5A] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-[#F9FAFB] mb-6">Price History Graph</h2>
        {validPriceData.length > 0 ? (
          <>
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 mb-6">
              <Line data={chartData} options={options} />
            </div>
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 text-[#333333]">
              <h3 className="text-3xl font-bold text-[#D4A017] mb-4">Price History Analytics</h3>
              <ul className="space-y-2 text-base">
                <li>Average Price: ${averagePrice.toLocaleString()}</li>
                <li>Total Price Change: ${totalPriceChange.toLocaleString()} (from earliest to latest)</li>
                <li>Highest Price: ${highestPrice.toLocaleString()} on {highestPriceEntry.date}</li>
                <li>Lowest Price: ${lowestPrice.toLocaleString()} on {lowestPriceEntry.date}</li>
                <li>Overall Price Trend: {trend} (Cumulative Price Change Rate: {(overallPriceChangeRate * 100).toFixed(2)}%)</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 text-[#333333]">
            <p className="text-lg">No price history data available.</p>
          </div>
        )}
      </div>
    </section>
  );
}