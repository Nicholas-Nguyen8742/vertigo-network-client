import './DashboardPage.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getWeather } from '../../utils/weatherAPI';
import NavBar from '../../components/NavBar/NavBar';
import UpcomingMissions from '../../components/UpcomingMissions/UpcomingMissions';
import WeatherSection from '../../components/WeatherSection/WeatherSection';
import PendingMissions from '../../components/PendingMissions/PendingMissions';

export default class DashboardPage extends Component {
    state = {
        user: null, 
        failedAuth: false,
        city: 'Orlando',
        location: {}, 
        current: {},
        forecast: []
    }
    
    componentDidMount() {
        const token = sessionStorage.getItem('token');

        if (!token) {
            this.setState({ failedAuth: true });
            return;
        }
        // Get the data from the API
        axios
            .get('http://localhost:8080/auth/current', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            .then((response) => {
                this.setState({
                    user: response.data,
                    city: response.data.city
                })
                this.getForecast();
            })
            .catch(() => {
                this.setState({
                    failedAuth: true
                })
            });
            
    }
    getForecast = async () => {
        try {
            const data = await getWeather(this.state.city);

            const response =  data;
            console.log(response);
            this.setState({
                location: response.data.location, 
                current: response.data.current, 
                forecast: response.data.forecast.forecastday
            })
            console.log(data);
            return data
        }
        catch(error) {
            console.log(error);
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem("token");
        this.setState({
            user: null,
            failedAuth: true
        })
    };
    
    render() {
        console.log(this.state.user);
        if (this.state.failedAuth) {
            return (
                <main className="dashboard">
                    <p>You must be logged in to see this page. <Link to="/login">Log in</Link></p>
                </main>
            )
        }
        if (!this.state.forecast.length) {
            return (
                <main className="dashboard">
                    <p>Loading...</p>
                </main>
            )
        }
        return (
            <main className='dashboard-page'>
                <NavBar id={this.state.user.id} />
                <div className='dashboard-main'>
                    <UpcomingMissions />
                    <WeatherSection forecast={this.state.forecast} />
                    <PendingMissions />
                </div>
            </main>
        );
    }
}