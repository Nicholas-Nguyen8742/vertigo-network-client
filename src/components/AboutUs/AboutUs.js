import './AboutUs.scss';
import Client from '../../assets/images/logo.PNG';
import React from 'react';

function AboutUs() {
    return (
        <section className='specialty'>
            <article className='specialty__card'> 
                <img className="specialty__card__image" src={Client} alt=""/>
                <h3 className='specialty__card__title'>Drone Photography & Video</h3>
                <p className='specialty__card__body'>Let us capture breathtaking aerial imagery to showcase the best your property has to offer, or have us collect, inspect, and analyze critical data for your enterprise.</p>
            </article>
        </section>
    );
}

export default AboutUs;