import './DashboardPage.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import UpcomingMissions from '../../components/UpcomingMissions/UpcomingMissions';
import WeatherSection from '../../components/WeatherSection/WeatherSection';
import PendingMissions from '../../components/PendingMissions/PendingMissions';

class DashboardPage extends Component {
    state = {

    }
    
    render() {
        return (
            <main className='dashboard-page'>
                <NavBar />
                <div className='dashboard-main'>
                    <UpcomingMissions />
                    <WeatherSection />
                    <PendingMissions />
                </div>
            </main>
        );
    }
}

export default DashboardPage;