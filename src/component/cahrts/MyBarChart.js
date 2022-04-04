import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const myBarchartData = [
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
        <BarChart width={550} height={250} data={myBarchartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
            <Bar dataKey="sell" fill="#ff0000" />
        </BarChart>
    );
};

export default MyBarChart;