import './SignUpForm.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';

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
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

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
                this.setState({ success: true, error: "" });
                event.target.reset();
                console.log(this.state.success);
            })
            .catch((error) => {
                this.setState({ success: false, error: error.response.data });
            });
    };


    render() {
        return (
            <form className='signUp__form' >
                <h2 className='signUp__title'>Sign-Up</h2>
                <div className='signUp__form-field'>
                    <div className='signUp__form-left'>
                        <Input type="text" name="firstName" label="First Name" />
                        <Input type="text" name="lastName" label="Last Name" />
                        <Input type="email" name="email" label="Email" />
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
                        <Input type="text" name="city" label="City" />
                        <Input type="text" name="state" label="State" />
                        <Input type="password" name="password" label="Password" />
                        <Input type="password" name="confirmPassword" label="Confirm Password" />
                    </div>
                </div>
                <button className='signUp__btn' type="submit">Register</button>
                <div className='signUp__login'>
                    <p className='signUp__login__body'>Already have an account?</p>
                    <Link to="/portal" className='signUp__login__link'>Sign-In</Link>
                </div>
            </form>
        );

    }
}

