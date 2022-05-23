import './MissionsAllPage.scss';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MissionCard from '../../components/UpcomingMissionCard/UpcomingMissionCard';

export default function MissionsAllPage() {
    return (
        <main className='missionsAll-page'>
                <NavBar />
                <div className='missionsAll-main'>
                    <input type="search" id="" className="missionsAll__search"
                    placeholder="Search..."/>
                    <div className='missionsAll-results'>
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                        <MissionCard />
                    </div>
                </div>
            </main>
    );
}
