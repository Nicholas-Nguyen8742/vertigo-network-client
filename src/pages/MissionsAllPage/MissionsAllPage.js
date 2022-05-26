import './MissionsAllPage.scss';
import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MissionCard from '../../components/MissionCard/MissionCard';
import axios from 'axios';
import { API_URL } from '../../utils/API';

export default class MissionsAllPage extends Component {
    state = {
        allMissions: [], 
        filteredMissions: [], 
        query: ''
    }
    
    componentDidMount() {
        axios.get(`${API_URL}/missions`)
            .then((res) => {
                this.setState({
                    allMissions: res.data
                })
            })
    }

    componentDidUpdate(_prevProps, prevState) {
        const incomingQuery = this.state.query;
        if (incomingQuery !== '' && prevState.query !== incomingQuery) {
            const search = this.state.allMissions.filter((mission) => mission.city.toLowerCase().includes(incomingQuery.toLowerCase()));
        this.setState({
            filteredMissions: search
        });
    }};
    
    render() {
        console.log(this.state.allMissions);
        const id = this.props.match.params.id;
        const { allMissions, filteredMissions, query } = this.state;
        const dataRender = query ? filteredMissions : allMissions;
        return (
            <main className='missionsAll-page'>
                    <NavBar id={id}/>
                    <div className='missionsAll-main'>
                        <input 
                        type="search" 
                        id="" 
                        className="missionsAll__search"
                        onChange={(e) => this.setState({ query: e.target.value})}
                        placeholder="Search..."/>
                        <div className='missionsAll-results'>
                            {dataRender.map((item) => (
                                <MissionCard 
                                    key={item.timestamp}
                                    pilotID={id}
                                    firstName={item.firstName}
                                    lastName={item.lastName}
                                    profile={item.profile}
                                    specialty={item.specialty}
                                    city={item.city}
                                    state={item.state}
                                    date={item.date}
                                    missionID={item.id}
                                    display='none'/>
                            ))}    
                        </div>
                    </div>
            </main>
        );
}
}