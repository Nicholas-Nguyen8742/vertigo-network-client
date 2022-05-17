import "./Login.scss";
import React from 'react';
import pilot from '../../assets/icons/pilot_icon.svg';
import client from '../../assets/icons/client_icon.svg';
import background from '../../assets/images/login-background.mp4';

function Login() {
    return (
        <main className="login">
            <div className="video-wrapper">
                <video className="video" playsInline autoplay="autoplay" muted loop="true">
                    <source src={background} type="video/mp4" />
                </video>
            </div>
            <div className="login-wrapper">
                <article className="login__card">
                    <h2 className="login__title">Pilot</h2>
                    <img className="login__icon" src={pilot} alt="Icon for pilots to login" />
                </article>
                <article className="login__card"> 
                    <h2 className="login__title">Client</h2>
                    <img className="login__icon" src={client} alt="Icon for clients to login"/>
                </article>
            </div>
        </main>
    );
}

export default Login;