import "./Portal.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import pilot from '../../assets/icons/pilot_icon.svg';
import client from '../../assets/icons/client_icon.svg';
import background from '../../assets/images/login-background.mp4';

function Portal() {
    return (
        <main className="login">
            <div className="video-wrapper">
                <video className="video" playsInline autoPlay="autoplay" muted loop={true}>
                    <source src={background} type="video/mp4" />
                </video>
            </div>
            <div className="login-wrapper">
                <Link to='/portal/pilot' className="login__link">
                    <article className="login__card">
                        <h2 className="login__title">Pilot</h2>
                        <img className="login__icon" src={pilot} alt="Icon for pilots to login" />
                    </article>
                </Link>
                <Link to='/portal/client' className="login__link">
                    <article className="login__card"> 
                        <h2 className="login__title">Client</h2>
                        <img className="login__icon" src={client} alt="Icon for clients to login"/>
                    </article>
                </Link>
            </div>
        </main>
    );
}

export default Portal;