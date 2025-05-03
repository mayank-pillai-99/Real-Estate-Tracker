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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PriceHistoryGraph() {
  const priceHistory = [
    { date: "2025-03-10", price: 70000, time: 1741564800000, pricePerSquareFoot: 66, priceChangeRate: 0, event: "Listing removed", source: "realMLS" },
    { date: "2025-03-08", price: 70000, time: 1741392000000, pricePerSquareFoot: 66, priceChangeRate: 0, event: "Pending sale", source: "realMLS" },
    { date: "2025-02-18", price: 70000, time: 1739836800000, pricePerSquareFoot: 66, priceChangeRate: 0.04477611940298507, event: "Listed for sale", source: "realMLS" },
    { date: "2024-03-18", price: 67000, time: 1710720000000, pricePerSquareFoot: 64, priceChangeRate: 0.08766233766233766, event: "Sold", source: "Public Record" },
    { date: "2023-08-16", price: 61600, time: 1692144000000, pricePerSquareFoot: 58, priceChangeRate: -0.2828870779976717, event: "Sold", source: "Public Record" },
    { date: "2022-10-05", price: null, time: 1664928000000, pricePerSquareFoot: null, priceChangeRate: 0, event: "Listing removed", source: "realMLS" },
    { date: "2022-07-12", price: 85900, time: 1657584000000, pricePerSquareFoot: 81, priceChangeRate: -0.10427528675703858, event: "Price change", source: "realMLS" },
    { date: "2022-06-16", price: 95900, time: 1655337600000, pricePerSquareFoot: 91, priceChangeRate: 0.2002503128911139, event: "Listed for sale", source: "realMLS" },
    { date: "2022-05-22", price: 79900, time: 1653177600000, pricePerSquareFoot: 76, priceChangeRate: 0, event: "Listing removed", source: "realMLS" },
    { date: "2021-11-17", price: null, time: 1637107200000, pricePerSquareFoot: null, priceChangeRate: 0, event: "Listing removed", source: "realMLS" },
    { date: "2021-10-22", price: 79900, time: 1634860800000, pricePerSquareFoot: 76, priceChangeRate: -0.610813443740867, event: "Listed for sale", source: "realMLS" },
    { date: "2013-02-27", price: 205300, time: 1361923200000, pricePerSquareFoot: 195, priceChangeRate: 23.152941176470588, event: "Sold", source: "Public Record" },
    { date: "2009-09-22", price: 8500, time: 1253577600000, pricePerSquareFoot: 8, priceChangeRate: -0.8682170542635659, event: "Sold", source: "Public Record" },
    { date: "2008-11-29", price: 64500, time: 1227916800000, pricePerSquareFoot: 61, priceChangeRate: 0, event: "Listing removed", source: "Listhub" },
    { date: "2008-11-20", price: 64500, time: 1227139200000, pricePerSquareFoot: 61, priceChangeRate: -0.07855826511807311, event: "Price change", source: "Listhub" },
    { date: "2008-10-26", price: 69999, time: 1224979200000, pricePerSquareFoot: 66, priceChangeRate: -0.06668, event: "Price change", source: "Listhub" },
    { date: "2008-09-28", price: 75000, time: 1222560000000, pricePerSquareFoot: 71, priceChangeRate: 0.013513513513513514, event: "Price change", source: "Listhub" },
    { date: "2008-08-27", price: 74000, time: 1219795200000, pricePerSquareFoot: 70, priceChangeRate: -0.06329113924050633, event: "Price change", source: "Listhub" },
    { date: "2008-06-24", price: 79000, time: 1214265600000, pricePerSquareFoot: 75, priceChangeRate: -0.07058823529411765, event: "Price change", source: "Listhub" },
    { date: "2008-06-10", price: 85000, time: 1213056000000, pricePerSquareFoot: 81, priceChangeRate: -0.14914914914914915, event: "Price change", source: "Listhub" },
    { date: "2008-04-21", price: 99900, time: 1208736000000, pricePerSquareFoot: 95, priceChangeRate: -0.15338983050847457, event: "Price change", source: "Listhub" },
    { date: "2008-03-18", price: 118000, time: 1205798400000, pricePerSquareFoot: 112, priceChangeRate: 1.189239332096475, event: "Listed for sale", source: "Listhub" },
    { date: "1998-01-05", price: 53900, time: 883958400000, pricePerSquareFoot: 51, priceChangeRate: 1.0572519083969465, event: "Sold", source: "Public Record" },
    { date: "1997-05-07", price: 26200, time: 862963200000, pricePerSquareFoot: 25, priceChangeRate: 0, event: "Sold", source: "Public Record" }
  ];

  // Filter out entries with null prices and sort by date (oldest to newest)
  const validPriceData = priceHistory
    .filter(entry => entry.price !== null)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Prepare data for the chart
  const labels = validPriceData.map(entry => entry.date);
  const prices = validPriceData.map(entry => entry.price);

  // Analytics calculations
  const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const totalPriceChange = prices[prices.length - 1] - prices[0];
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  const highestPriceEntry = validPriceData.find(entry => entry.price === highestPrice);
  const lowestPriceEntry = validPriceData.find(entry => entry.price === lowestPrice);
  const overallPriceChangeRate = validPriceData.reduce((sum, entry) => sum + entry.priceChangeRate, 0);
  const trend = overallPriceChangeRate > 0 ? "increasing" : overallPriceChangeRate < 0 ? "decreasing" : "stable";

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Price History',
        data: prices,
        borderColor: '#D4A017',
        backgroundColor: '#D4A017',
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
        <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">Price History Graph</h2>
        <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 mb-6">
          <Line data={chartData} options={options} />
        </div>
        <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 text-[#333333]">
          <h3 className="text-xl font-bold text-[#D4A017] mb-4">Price History Analytics</h3>
          <ul className="space-y-2 text-base">
            <li>Average Price: ${averagePrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</li>
            <li>Total Price Change: ${totalPriceChange.toLocaleString()} (from earliest to latest)</li>
            <li>Highest Price: ${highestPrice.toLocaleString()} on {highestPriceEntry.date}</li>
            <li>Lowest Price: ${lowestPrice.toLocaleString()} on {lowestPriceEntry.date}</li>
            <li>Overall Price Trend: {trend} (Cumulative Price Change Rate: {(overallPriceChangeRate * 100).toFixed(2)}%)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}