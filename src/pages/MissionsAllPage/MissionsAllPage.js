import './MissionsAllPage.scss';
import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MissionCard from '../../components/UpcomingMissionCard/UpcomingMissionCard';
import axios from 'axios';
import { API_URL } from '../../utils/API';

export default class MissionsAllPage extends Component {
    state = {
        allMissions: []
    }
    
    componentDidMount() {
        axios.get(`${API_URL}/missions`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    allMissions: res.data
                })
            })
    }

    
    
    render(){
        console.log(this.state.allMissions);
        return (
            <main className='missionsAll-page'>
                    <NavBar />
                    <div className='missionsAll-main'>
                        <input type="search" id="" className="missionsAll__search"
                        placeholder="Search..."/>
                        <div className='missionsAll-results'>
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                            <MissionCard />
                        </div>
                    </div>
            </main>
        );
}
}