import React from 'react';
import MyBarChart from '../cahrts/MyBarChart';
import MyLineChart from '../cahrts/MyLineChart';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-2 my-24 pl-9'>
            <div>
                <MyLineChart></MyLineChart>
            </div>
            <div>
                <MyBarChart></MyBarChart>
            </div>
        </div>
    );
};

export default Dashboard;