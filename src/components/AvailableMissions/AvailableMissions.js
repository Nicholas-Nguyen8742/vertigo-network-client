import './AvailableMissions.scss';
import React from 'react';
import MissionCard from '../MissionCard/MissionCard';

export default function AvailableMissions() {
    return (
        <section className='availableMissions'>
            <h2 className='availableMissions__title'>Pending Missions</h2>
            <MissionCard />
            <MissionCard />
        </section>
    );
}