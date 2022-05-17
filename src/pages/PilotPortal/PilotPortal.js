import './PilotPortal.scss'
import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import pilotbg from '../../assets/videos/pilot_login.mp4';

class PilotPortal extends Component {
    state = {

    }

    render() {
        return (
            <main>
                <LoginForm title="Pilot" video={pilotbg}/>
            </main>
        );
    }
}

export default PilotPortal;