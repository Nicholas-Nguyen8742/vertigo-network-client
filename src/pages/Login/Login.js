import "./Login.scss";
import React from 'react';
import pilot from '../../assets/icons/pilot_icon.png';
import client from '../../assets/icons/client_icon.png';


function Login() {
    return (
        <main>
            <h1>Login</h1>
            <article>
                <h2>Pilot</h2>
                <img href={pilot} alt="Icon for pilots to login" />
            </article>
            <article> 
                <h2>Client</h2>
                <img href={client} alt="Icon for clients to login"/>
            </article>
        </main>
    );
}

export default Login;