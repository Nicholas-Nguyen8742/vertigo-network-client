import './PendingMissions.scss';
import React from 'react';
import MissionCard from '../MissionCard/MissionCard';

export default function PendingMissions() {
    return (
        <section className='pendingMissions'>
            <h2 className='pendingMissions__title'>Pending Missions</h2>
            <MissionCard />
            <MissionCard />
        </section>
    );
}

