import './ProfilePastMissionsPage.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';
import MissionCard from '../../components/MissionCard/MissionCard';

export default class ProfilePastMissionsPage extends Component {
    state = {
        missions: []
    }

    componentDidMount() {
        axios.get(`${API_URL}/pilots/${this.props.match.params.id}/applications`)
            .then((res) => {
                const data = res.data;
                // Gets first three open missions
                const filteredMissions = data.filter(mission => mission.status === 'closed');
                console.log(filteredMissions);
                this.setState({
                    missions: filteredMissions
                })
            })
    }
    render() {
        const id = this.props.match.params.id;
        const {missions} =this.state;
        return (
            <main className='profileReviews-page'>
                <NavBar id={id} />
                <div className='profileReviews-main'>
                    <PortfolioDescription />
                    <ProfileNav id={id} btn="Reviews" />
                    <div className='profileReviews-portfolio'>
                    {missions.map(mission => (
                        <MissionCard
                            key={mission.id}
                            firstName={mission.firstName}
                            lastName={mission.lastName}
                            status={mission.status}
                            specialty={mission.specialty}
                            profile={mission.profile}
                            city={mission.city}
                            state={mission.state}
                        />))}
                    </div>
                </div>
            </main>
        );
    }
}

