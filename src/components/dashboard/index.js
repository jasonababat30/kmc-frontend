import React from 'react';
import DashboardProvider from './DashboardProvider';
import DashboardService from './DashboardService';

const Dashboard = () => {

    return (
        <div>
            <DashboardProvider>
                <DashboardService />
            </DashboardProvider>
        </div>
    )
}

export default Dashboard