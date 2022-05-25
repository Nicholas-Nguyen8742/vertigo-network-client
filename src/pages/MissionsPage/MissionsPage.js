import './MissionsPage.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import AvailableMissions from '../../components/AvailableMissions/AvailableMissions';
import MissionsMap from '../../components/MissionsMap/MissionsMap';

export default class MissionsPage extends Component {
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

    render() {
        const {allMissions} = this.state;
        const id = this.props.match.params.id;
        return (
            <main className='missions-page'>
                <NavBar id={id} />
                <div className='missions-main'>
                    <AvailableMissions id={id}/>
                    <MissionsMap missions={allMissions}/>
                </div>
            </main>
        );
    }
}