import './LoginPage.scss'
import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import pilotbg from '../../assets/videos/pilot_login.mp4';

export default class LoginPage extends Component {
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