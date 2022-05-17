import "./Login.scss";
import React from 'react';
import pilot from '../../assets/icons/pilot_icon.svg';
import client from '../../assets/icons/client_icon.svg';


function Login() {
    return (
        <main className="login">
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