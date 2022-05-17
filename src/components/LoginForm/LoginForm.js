import './LoginForm.scss';
import React, { Component } from 'react';
import axios from 'axios';
import PortalBackground from "../PortalBackground/PortalBackground";
import Input from '../Input/Input';


/* Used for both Client & Pilot Portal Logins */
class LoginForm extends Component {
    state = {
        error: "",
        success: false
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios
    //         .post('http://localhost:8080/api/users/login', {
    //             email: event.target.email.value,
    //             password: event.target.password.value
    //         })
    //         .then((response) => {
    //             sessionStorage.setItem("token", response.data.token);
    //             this.setState({ success: true });
    //         })
    //         .catch((error) => {
    //             this.setState({ error: error.response.data });
    //         });
    // };

    render() {
        const { title, video } = this.props;
        return (
            <div className='loginForm'>
                <PortalBackground video={video} />
                <section className='loginForm-wrapper'>
                    <form className="loginForm__form" onSubmit={this.handleLogin}>
                        <h2 className="loginForm__title">{title} Sign-in</h2>
                        <Input type="text" name="email" label="Email" />
                        <Input type="password" name="password" label="Password" />
                        <button className='loginForm__btn'>Sign-In</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default LoginForm;