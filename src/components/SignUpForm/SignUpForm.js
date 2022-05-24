import './SignUpForm.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { Redirect } from 'react-router-dom';

export default class SignUpForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        email: "",
        type: '',
        password: "",
        confirmPassword: "",
        error: "",
        success: false,
        redirect: false
    };

    // Handles Controlled Change
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Axios Handles Registration
    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, city, state, email, password, type } = this.state;
        axios
            .post("http://localhost:8080/auth/register", {
                type,
                firstName,
                lastName,
                city,
                state,
                email,
                password
            })
            .then(() => {
                this.setState({ redirect: true, success: true, error: "" });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ success: false, error: error.response.data });
            });
    };


    render() {
        // Redirect After Successful Registration
        if (this.state.redirect === true) {
            return (
                <div>
                    <Redirect to="/login" />
                </div>
            )
        }

        return (
            <form className='signUp__form' onSubmit={this.handleSubmit}>
                <h2 className='signUp__title'>Join the Network</h2>
                <div className='signUp__form-field'>
                    <div className='signUp__form-left'>
                        <Input type="text" name="firstName" label="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                        <Input type="text" name="lastName" label="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                        <Input type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange}/>
                        <div className='signUp__form-radio'>
                            <h3 className='signUp__form-radio__title'>Select your network: </h3>
                            <label className='signUp__form-radio__label'>
                                Pilot
                                <input className='signUp__form-radio__input' type="radio" name="type" value="pilot" />
                            </label>
                            <label className='signUp__form-radio__label'>
                                Client
                                <input className='signUp__form-radio__input' type="radio" name="type" value="client" />
                            </label>
                        </div>
                    </div>
                    <div className='signUp__form-right'>
                        <Input type="text" name="city" label="City" value={this.state.city} onChange={this.handleChange}/>
                        <Input type="text" name="state" label="State"  value={this.state.state} onChange={this.handleChange}/>
                        <Input type="password" name="password" label="Password"  value={this.state.password} onChange={this.handleChange}/>
                        <Input type="password" name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}/>
                    </div>
                </div>
                <button className='signUp__btn' type="submit">Register</button>
                {this.state.success && <span className="signUp__message">Signed up!</span>}
                {this.state.error && <span className="signUp__message">{this.state.error}</span>}
                <div className='signUp__login'>
                    <p className='signUp__login__body'>Already have an account?</p>
                    <Link to="/login" className='signUp__login__link'>Sign-In</Link>
                </div>
            </form>
        );

    }
}

