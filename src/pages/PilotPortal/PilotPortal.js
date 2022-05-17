import './PilotPortal.scss'
import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class PilotPortal extends Component {
    state = {

    }

    render() {
        return (
            <main>
                <LoginForm />
            </main>
        );
    }
}

export default PilotPortal;