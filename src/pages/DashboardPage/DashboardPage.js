import './DashboardPage.scss';
import React, { Component } from 'react';
import { getWeather } from '../../utils/weatherAPI';
import NavBar from '../../components/NavBar/NavBar';
import UpcomingMissions from '../../components/UpcomingMissions/UpcomingMissions';
import WeatherSection from '../../components/WeatherSection/WeatherSection';
import PendingMissions from '../../components/PendingMissions/PendingMissions';

export default class DashboardPage extends Component {
    state = {
        city: 'Orlando',
        location: {}, 
        current: {},
        forecast: []
    }

    getForecast = async () => {
        try {
            const data = await getWeather(this.state.city);

            const response = await data.json();

            this.setState({
                location: response.city, 
                current: response.current, 
                forecast: response.forecast.forecastday
            })
            return data
        }
        catch(error) {
            console.log(error);
        }
    }
    
    render() {
        if (this.state.forecast.length === 0) {
            return (
              <main>
                <p className="loading">... Loading your Profile ...</p>
              </main>
            )
        }
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