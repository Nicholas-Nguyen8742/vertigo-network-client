import './DashboardPage.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';


class DashboardPage extends Component {
    state = {

    }
    
    render() {
        return (
            <main className='dashboard-page'>
                <NavBar />
                <div className='dashboard-page'>
                    
                </div>
            </main>
        );
    }
}

export default DashboardPage;