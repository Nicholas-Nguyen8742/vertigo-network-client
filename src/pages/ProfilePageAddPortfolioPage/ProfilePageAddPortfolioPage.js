import './ProfilePageAddPortfolioPage.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import Input from '../../components/Input/Input';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';

export default class ProfilePageAddPortfolioPage extends Component {
    state = {
        img: "",
        city: '',
        state: '',
        client: '',
        dateCompleted: '',
        put: null,
        post: null,
        redirect: false,
        id: '',
    }

    // Empty String Validation
    isEmpty = () => {
        const { img, city, state, client, dateCompleted } = this.state;
        if ( img || city || state || client || dateCompleted === "" ) {
            return true;
        }
        return false;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Handle Post
    handlePost = (event) => {
        event.preventDefault();
        const pilotID = this.props.match.params.id;
        console.log(pilotID);
        const { city, client, dateCompleted, state, img } = this.state;
        axios.post(`${API_URL}/pilots/${pilotID}/portfolio`, {
            client,
            dateCompleted,
            city,
            state,
            img
        })
            .then((response) => {
                this.setState({ update: response.status, redirect: true });
            });
    };

    render() {
        const { pilotID } = this.state;
        const { id } = this.props.match.params;

        if (this.state.redirect === true) {
            return (
                <>
                    <Redirect to={`/dashboard/${pilotID}/portfolio`} />
                </>
            )
        }

        return (
            <main className='profile-page'>
                <NavBar id={id} />
                <div className='profile-main'>
                    <PortfolioDescription />
                    <ProfileNav id={id} btn="Portfolio" />
                    <div className='profile-portfolio'>
                        <form className='portfolio__form' onSubmit={this.handlePost}>
                            <h3 className='portfolio__title'>Add to Portfolio</h3>
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.client}
                                label="Client"
                                name="client"
                                />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.dateCompleted}
                                label="Date Completed"
                                name="dateCompleted" 
                                />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.city}
                                label="City"
                                name="city" 
                                />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.state}
                                label="State"
                                name="state" 
                                />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.img}
                                label="Image Link"
                                name="img" 
                                />
                            <button disabled={!this.isEmpty()} className='portfolio__cta' type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

