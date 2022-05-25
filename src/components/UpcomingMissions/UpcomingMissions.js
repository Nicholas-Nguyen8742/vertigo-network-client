import './UpcomingMissions.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from "axios";
import UpcomingMissionCard from '../UpcomingMissionCard/UpcomingMissionCard';

export default class UpcomingMissions extends Component {
    componentDidMount() {
        axios.get(`${API_URL}/missions`)
        .then((res) => {
            console.log(res.data);
            this.setState({
                allMissions: res.data
            })
        })
}
    render() {
    return (
        <section className='upcomingMissions'>
            <h2 className='upcomingMissions__title'>Upcoming Missions</h2>
            <div className='cardList'>
                <UpcomingMissionCard />
                <UpcomingMissionCard />
                <UpcomingMissionCard />
            </div>
        </section>
    );
}}

