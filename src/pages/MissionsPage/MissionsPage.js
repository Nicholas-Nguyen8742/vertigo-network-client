import './MissionsPage.scss';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AvailableMissions from '../../components/AvailableMissions/AvailableMissions';
import MissionsMap from '../../components/MissionsMap/MissionsMap';

export default function MissionsPage() {



        return (
            <main className='missions-page'>
                <NavBar />
                <div className='missions-main'>
                    <AvailableMissions />
                    <MissionsMap />
                </div>
            </main>
        );
    }


