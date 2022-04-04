import React from 'react';
import MyBarChart from '../cahrts/MyBarChart';
import MyLineChart from '../cahrts/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <h1 className='flex justify-center py-7 font-bold text-2xl font-serif'>Here is the Charts about Sell Investmant and Revenue</h1>
            <div className='grid grid-cols-2 my-24 pl-9'>
                <div>
                    <MyLineChart></MyLineChart>
                </div>
                <div>
                    <MyBarChart></MyBarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;