import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {

    return (
        <main className='dashboard-content'>
            <div className="dashboard-conView">
                <div className="anatomyBodyview">
                    <AnatomySection />
                    <HealthStatusCards />

                </div>
                <ActivityFeed />
            </div>
            <div className="dashboard-contentView">
                <CalendarView />
                <UpcomingSchedule />
            </div>
        </main>
    )
}
export default DashboardMainContent;

