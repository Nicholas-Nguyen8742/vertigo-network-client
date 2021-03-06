import "./Portal.scss";
import React from 'react';
import { Link } from 'react-router-dom';
import pilot from '../../assets/icons/pilot_icon.svg';
import client from '../../assets/icons/client_icon.svg';
import background from '../../assets/videos/portal_login.mp4';
import PortalBackground from "../../components/PortalBackground/PortalBackground";

export default function Portal() {
    return (
        <main className="login">
            <PortalBackground video={background}/>
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