import './AvailableMissions.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MissionCard from '../MissionCard/MissionCard';
import chevron from '../../assets/icons/downChevron_icon.png';


export default class AvailableMissions extends Component {
    state = {
        allMissions: [],
        totalMissions: null
    }

    componentDidMount() {
        axios.get(`${API_URL}/missions`)
            .then((res) => {
                const data = res.data;
                // Gets first five missions
                const filteredMissions = data.slice(0, 5);

                // Counts Open Missions
                const count = data.length;

                this.setState({
                    allMissions: filteredMissions,
                    totalMissions: count
                })
            })
    }

    render() {
        const {allMissions, totalMissions} = this.state;
        return (
            <section className='availableMissions'>
                <h2 className='availableMissions__title'>Available Missions</h2>
                <p className='availableMissions__results'>{totalMissions} Results</p>
                {allMissions.map(mission => (
                    <MissionCard
                        key={mission.timestamp}
                        firstName={mission.firstName}
                        lastName={mission.lastName}
                        profile={mission.profile}
                        city={mission.city}
                        state={mission.state}
                        date={mission.date} />

                ))}
                <NavLink className='availableMissions__link' to="/missions/all">
                    <img className='availableMissions__link' src={chevron} alt='' />
                </NavLink>
            </section>
        );
    }
}