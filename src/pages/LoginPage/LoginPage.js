import './LoginPage.scss'
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import pilotbg from '../../assets/videos/pilot_login.mp4';

export default function LoginPage() {

    return (
        <main>
            <LoginForm title="Pilot" video={pilotbg} />
        </main>
    );
}
