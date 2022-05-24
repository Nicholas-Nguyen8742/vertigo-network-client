import './LoginForm.scss';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { emailValidation, isEmptyPassword } from '../../utils/formValidation';
import PortalBackground from "../PortalBackground/PortalBackground";
import Input from '../Input/Input';


/* Used for both Client & Pilot Portal Logins */
export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        success: false
    }

    // Handles Controlled Change
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Handles Login
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        axios
            .post('http://localhost:8080/auth/login', {
                email,
                password
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({ success: true });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ error: error.response.data });
            });
    };

    render() {
        const { video } = this.props;
        return (
            <div className='loginForm'>
                <PortalBackground video={video} />
                <section className='loginForm-wrapper'>
                    <form className="loginForm__form" onSubmit={this.handleSubmit}>
                        <h2 className="loginForm__title">Sign-in</h2>
                        <Input type="text" name="email" label="Email" value={this.state.email} onChange={this.handleChange} valid={emailValidation}/>
                        <Input type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} valid={isEmptyPassword}/>
                        <button className='loginForm__btn' type="submit">Sign-In</button>
                        {this.state.success && <Redirect to="/dashboard" />}
                        {this.state.error && <p>{this.state.error}</p>}
                        <div className='loginForm__register'>
                            <p className='loginForm__register__body'>Join the Network!</p>
                            <Link to="/signup" className='loginForm__register__link'>Register</Link>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

