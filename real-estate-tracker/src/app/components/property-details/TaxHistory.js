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

const TaxHistoryGraph = () => {
    const taxHistory = [
        { time: 1632995327966, taxPaid: 9969.74, taxIncreaseRate: 0.006944743, value: 814147, valueIncreaseRate: 0.01035865 },
        { time: 1601459327966, taxPaid: 9900.98, taxIncreaseRate: 0, value: 805800, valueIncreaseRate: 0.019093135 },
        { time: 1569836927966, taxPaid: 9900.98, taxIncreaseRate: 0.0710339, value: 790703, valueIncreaseRate: 0.01999871 },
        { time: 1538300927966, taxPaid: 9244.32, taxIncreaseRate: 0, value: 775200, valueIncreaseRate: 4.1677933 },
        { time: 1506764927966, taxPaid: 9244.32, taxIncreaseRate: 3.2286425, value: 150006, valueIncreaseRate: 0.01999796 },
        { time: 1475228927966, taxPaid: 2186.12, taxIncreaseRate: 0.07564536, value: 147065, valueIncreaseRate: 0.015249628 },
        { time: 1443606527966, taxPaid: 2032.38, taxIncreaseRate: 0.023569964, value: 144856, valueIncreaseRate: 0.0199762 },
        { time: 1412070527966, taxPaid: 1985.58, taxIncreaseRate: 0, value: 142019, valueIncreaseRate: 0.024623754 },
        { time: 1348998527966, taxPaid: null, taxIncreaseRate: 0, value: 138606, valueIncreaseRate: 0.01999426 },
        { time: 1317376127966, taxPaid: null, taxIncreaseRate: 0, value: 135889, valueIncreaseRate: -0.7752043 },
        { time: 1285840127966, taxPaid: null, taxIncreaseRate: 0, value: 604500, valueIncreaseRate: -0.1129353 },
        { time: 1254304127966, taxPaid: null, taxIncreaseRate: 0, value: 681461, valueIncreaseRate: 0.019998504 },
        { time: 1222768127966, taxPaid: null, taxIncreaseRate: 0, value: 668100, valueIncreaseRate: 0.24147081 },
        { time: 1191145727966, taxPaid: null, taxIncreaseRate: 0, value: 538152, valueIncreaseRate: 1.121097 },
        { time: 1159609727966, taxPaid: null, taxIncreaseRate: 0, value: 253714, valueIncreaseRate: 0 },
        { time: 1128073727966, taxPaid: null, taxIncreaseRate: 0, value: 253714, valueIncreaseRate: 0.040395632 },
        { time: 1096537727966, taxPaid: null, taxIncreaseRate: 0, value: 243863, valueIncreaseRate: 0.01866797 },
        { time: 1064915327966, taxPaid: null, taxIncreaseRate: 0, value: 239394, valueIncreaseRate: 0.019995654 },
        { time: 1033379327966, taxPaid: null, taxIncreaseRate: 0, value: 234701, valueIncreaseRate: 0.04038743 },
        { time: 970307327966, taxPaid: null, taxIncreaseRate: 0, value: 225590, valueIncreaseRate: 0 }
    ];

    const validTaxData = taxHistory
        .filter(entry => entry.taxPaid !== null)
        .sort((a, b) => a.time - b.time);

    const labels = validTaxData.map(entry => new Date(entry.time).toISOString().split('T')[0]);
    const taxes = validTaxData.map(entry => entry.taxPaid);

    const averageTax = taxes.reduce((sum, tax) => sum + tax, 0) / taxes.length;
    const totalTax = taxes.reduce((sum, tax) => sum + tax, 0);
    const highestTax = Math.max(...taxes);
    const lowestTax = Math.min(...taxes);
    const highestTaxEntry = validTaxData.find(entry => entry.taxPaid === highestTax);
    const lowestTaxEntry = validTaxData.find(entry => entry.taxPaid === lowestTax);
    const overallTaxIncrease = validTaxData.reduce((sum, entry) => sum + entry.taxIncreaseRate, 0);
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
            </div>
        </section>
    );
};

export default TaxHistoryGraph;