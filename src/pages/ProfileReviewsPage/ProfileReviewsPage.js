import './ProfileReviewsPage.scss';
import React, { Component } from 'react';
import { API_URL } from '../../utils/API';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

export default class ProfileReviewsPage extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        axios.get(`${API_URL}/pilots/${this.props.match.params.id}/reviews`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    reviews: res.data
                })
            })
    }

    render() {
        const id = this.props.match.params.id;
        const { reviews } = this.state;
        return (
            <main className='profileReviews-page'>
                <NavBar id={id} />
                <div className='profileReviews-main'>
                    <PortfolioDescription />
                    <ProfileNav id={id} btn="Reviews" />
                    <div className='profileReviews-portfolio'>
                        {reviews.map((item) => (
                            <ReviewCard
                                key={item.timestamp}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                profile={item.profile}
                                city={item.city}
                                state={item.state}
                                description={item.description} 
                                rating={item.rating}
                                />
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}