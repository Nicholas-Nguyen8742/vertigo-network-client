import './ProfilePage.scss';
import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class ProfilePage extends Component {
    state = {

    }
    render() {
        return (
            <main className='profile-page'>
                <NavBar />
                <div className='profile-main'>

                </div>
            </main>
        );
    }
}

export default ProfilePage;