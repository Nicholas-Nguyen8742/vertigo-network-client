import './MissionsPage.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AvailableMissions from '../../components/AvailableMissions/AvailableMissions';

export default class MissionsPage extends Component {
    state = {

    }
    render() {
        return (
            <main className='missions-page'>
                <NavBar />
                <div className='missions-main'>
                    <AvailableMissions />
                </div>
            </main>
        );
    }
}

