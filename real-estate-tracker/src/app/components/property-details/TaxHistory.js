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

export default function TaxHistory({ taxHistory }) {
  const validTaxData = taxHistory
    .filter(entry => entry.taxPaid !== null) 
    .sort((a, b) => a.time - b.time); 
  const labels = validTaxData.map(entry => new Date(entry.time).toISOString().split('T')[0]);
  const taxes = validTaxData.map(entry => entry.taxPaid);

  // Calculate analytics with safeguards for empty data
  const averageTax = taxes.length > 0 ? taxes.reduce((sum, tax) => sum + tax, 0) / taxes.length : 0;
  const totalTax = taxes.length > 0 ? taxes.reduce((sum, tax) => sum + tax, 0) : 0;
  const highestTax = taxes.length > 0 ? Math.max(...taxes) : 0;
  const lowestTax = taxes.length > 0 ? Math.min(...taxes) : 0;
  const highestTaxEntry = validTaxData.find(entry => entry.taxPaid === highestTax) || { time: 0 };
  const lowestTaxEntry = validTaxData.find(entry => entry.taxPaid === lowestTax) || { time: 0 };
  const overallTaxIncrease = validTaxData.reduce((sum, entry) => sum + (entry.taxIncreaseRate || 0), 0);
  const trend = overallTaxIncrease > 0 ? "increasing" : overallTaxIncrease < 0 ? "decreasing" : "stable";

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Tax History',
        data: taxes,
        borderColor: '#D4A017',
        pointBackgroundColor: '#D4A017',
        pointBorderColor: '#D4A017',
        fill: true,
        backgroundColor: 'rgba(212, 160, 23, 0.2)',
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
        text: 'Tax History Over Time',
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
        <h2 className="text-5xl font-bold text-[#F9FAFB] mb-6">Tax History Graph</h2>
        {validTaxData.length > 0 ? (
          <>
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 mb-6">
              <Line data={chartData} options={options} />
            </div>
            <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 text-[#333333]">
              <h3 className="text-3xl font-bold text-[#D4A017] mb-4">Tax History Analytics</h3>
              <ul className="space-y-2 text-base">
                <li>Average Tax Paid: ${averageTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</li>
                <li>Total Tax Paid: ${totalTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</li>
                <li>Highest Tax Paid: ${highestTax.toLocaleString()} on {new Date(highestTaxEntry.time).toISOString().split('T')[0]}</li>
                <li>Lowest Tax Paid: ${lowestTax.toLocaleString()} on {new Date(lowestTaxEntry.time).toISOString().split('T')[0]}</li>
                <li>Overall Tax Trend: {trend} (Cumulative Tax Increase Rate: {(overallTaxIncrease * 100).toFixed(2)}%)</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="bg-[#F9FAFB] rounded-lg shadow-md p-6 text-[#333333]">
            <p className="text-lg">No tax history data available.</p>
          </div>
        )}
      </div>
    </section>
  );
}