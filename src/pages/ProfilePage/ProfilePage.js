import './ProfilePage.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

export default class ProfilePage extends Component {
    state = {
        portfolio: []
    }

    componentDidMount() {
        axios.get(`${API_URL}/pilots/${this.props.match.params.id}/portfolio`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    portfolio: res.data
                })
            })
    }

    render() {
        const id = this.props.match.params.id;
        const { portfolio } = this.state;
        return (
            <main className='profile-page'>
                <NavBar id={id} />
                <div className='profile-main'>
                    <PortfolioDescription />
                    <ProfileNav id={id} btn="Portfolio" />
                    <div className='profile-portfolio'>
                        {portfolio.map((item) => (
                            <PortfolioCard
                                id={item.id}
                                key={item.timestamp}
                                img={item.img}
                                city={item.city}
                                state={item.state}
                                date={item.dateCompleted}
                                client={item.client}
                            />
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}