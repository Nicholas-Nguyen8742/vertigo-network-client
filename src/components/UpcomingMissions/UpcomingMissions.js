import './UpcomingMissions.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from "axios";
import UpcomingMissionCard from '../UpcomingMissionCard/UpcomingMissionCard';

export default class UpcomingMissions extends Component {
    state = {
        allMissions: [],
    }

    componentDidMount() {
        const { pilotID } = this.props;
        axios.get(`${API_URL}/pilots/${pilotID}/applications`)
            .then((res) => {
                const data = res.data;
                // Gets first three open missions
                const filteredMissions = data.filter(mission => mission.status === 'accepted');
                const firstThree = filteredMissions.slice(3, 6);
                console.log(firstThree);
                this.setState({
                    allMissions: firstThree
                })
            })
    }
    render() {
        const { allMissions } = this.state;
        return (
            <section className='upcomingMissions'>
                <h2 className='upcomingMissions__title'>Upcoming Missions</h2>
                <div className='cardList'>
                    {allMissions.map(mission => (
                        <UpcomingMissionCard
                            key={mission.id}
                            firstName={mission.firstName}
                            lastName={mission.lastName}
                            date={mission.date}
                            specialty={mission.specialty}
                            profile={mission.profile}
                            city={mission.city}
                            state={mission.state}
                        />))}
                </div>
            </section>
        );
    }
}

