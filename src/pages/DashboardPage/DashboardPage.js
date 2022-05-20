import './DashboardPage.scss';
import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class DashboardPage extends Component {
    state = {

    }
    
    render() {
        return (
            <main>
                <LoginForm title="Client" />
            </main>
        );
    }
}

export default DashboardPage;