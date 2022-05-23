import './AvailableMissions.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MissionCard from '../MissionCard/MissionCard';
import chevron from '../../assets/icons/downChevron_icon.png';

export default function AvailableMissions() {
    return (
        <section className='availableMissions'>
            <h2 className='availableMissions__title'>Available Missions</h2>
            <p className='availableMissions__results'>45 Results</p>
            <MissionCard />
            <MissionCard />
            <MissionCard />
            <MissionCard />
            <MissionCard />
            <NavLink className='availableMissions__link' to="/missions/all">
                <img className='availableMissions__link' src={chevron} alt='' />
            </NavLink>
        </section>
    );
}