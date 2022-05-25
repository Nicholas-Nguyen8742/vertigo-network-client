import './ProfilePageEditPortfolioPage.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import Input from '../../components/Input/Input';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';

export default class ProfilePageEditPortfolioPage extends Component {
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
        pilotID: ''
    }

    componentDidMount() {
        const portfolioID = this.props.match.params.portfolioID;
        axios.get(`${API_URL}/pilots/portfolio/${portfolioID}`)
            .then((res) => {
                const data = res.data;
                // const data = response.filter(item => item.id === this.props.match.params.portfolioID)
                this.setState({
                    img: data.img,
                    client: data.client,
                    city: data.city,
                    dateCompleted: data.dateCompleted,
                    state: data.state,
                    id: data.id,
                    pilotID: data.pilotID
                })
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    // Handle PUT
    handlePut = (event) => {
        event.preventDefault();
        const { city, client, dateCompleted, state, img, id } = this.state;
        axios.put(`${API_URL}/pilots/portfolio/${id}`, {
            client,
            dateCompleted,
            city,
            state,
            img
        })
            .then((response) => {
                this.setState({ update: response.status, redirect: true }); console.log("yay");
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
                        <form className='portfolio__form' onSubmit={this.handlePut}>
                            <h3 className='portfolio__title'>{this.props.title} Portfolio</h3>
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
                                name="dateCompleted" />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.city}
                                label="City"
                                name="city" />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.state}
                                label="State"
                                name="state" />
                            <Input
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.img}
                                label="Image Link"
                                name="img" />
                            <button className='portfolio__cta' type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

