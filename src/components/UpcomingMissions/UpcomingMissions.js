import './UpcomingMissions.scss';
import React from 'react';
import UpcomingMissionCard from '../UpcomingMissionCard/UpcomingMissionCard';

function UpcomingMissions() {
    return (
        <section className='upcomingMissions'>
            <h2 className='upcomingMissions__title'>Upcoming Missions</h2>
            <div className='cardList'>
                <UpcomingMissionCard />
                <UpcomingMissionCard />
                <UpcomingMissionCard />
            </div>
        </section>
    );
}

export default UpcomingMissions;