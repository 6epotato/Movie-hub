import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    // here cell column is updated
    const MyLinChartData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 24100,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 42300,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 72600,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 52900,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 60100,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 67000,
            "revenue": 61000
        }
    ]
    return (
        <LineChart width={550} height={250} data={MyLinChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            <Line type="monotone" dataKey="sell" stroke="#ff0000" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
    );
};

export default MyLineChart;