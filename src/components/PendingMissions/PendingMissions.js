import './PendingMissions.scss';
import React, { Component } from 'react';
import axios from "axios";
import { API_URL } from '../../utils/API';
import MissionCard from '../MissionCard/MissionCard';

export default class PendingMissions extends Component {
    state = {
        allMissions: []
    }

    componentDidMount() {
        const { pilotID } = this.props;
        axios.get(`${API_URL}/pilots/${pilotID}/applications`)
        .then((res) => {
            console.log(res.data);
            const data = res.data;
            // Gets first three open missions
            const filteredMissions = data.filter(mission => mission.status === 'pending');
            const firstThree = filteredMissions.slice(0,3);
            console.log(firstThree)
            this.setState({
                allMissions: firstThree
            })
        })
}
    render() {
        const {allMissions} = this.state;
        return (
            <section className='pendingMissions'>
                <h2 className='pendingMissions__title'>Pending Missions</h2>
                {allMissions.map(mission =>(
                    <MissionCard 
                        key={mission.id}
                        firstName={mission.firstName}
                        lastName={mission.lastName}
                        date={mission.date}
                        specialty={mission.specialty}
                        profile={mission.profile}
                        city={mission.city}
                        state={mission.state}    
                        status={mission.status}
                    />

                ))}
            </section>
        );
    }
}
