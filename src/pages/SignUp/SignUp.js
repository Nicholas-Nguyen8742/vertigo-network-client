import './SignUp.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PortalBackground from '../../components/PortalBackground/PortalBackground';
import Input from '../../components/Input/Input';
import video from '../../assets/videos/portal_login.mp4';

export default function SignUp() {
    return (
        <main className='signUp-page'>
            <PortalBackground video={video}/>
            <section className='signUp'>
                <form className='signUp__form' > 
                    <h2 className='signUp__title'>Sign-Up</h2>
                    <div className='signUp__form-field'>
                        <div className='signUp__form-left'>
                            <Input type="text" name="firstName" label="First Name" />
                            <Input type="text" name="lastName" label="Last Name"/>
                            <Input type="email" name="email" label="Email"/>
                            <div className='signUp__form-radio'>
                                <h3 className='signUp__form-radio__title'>Select your network: </h3>
                                <label className='signUp__form-radio__label'>
                                    Pilot
                                    <input className='signUp__form-radio__input' type="radio" name="user" label="pilot"/>
                                </label>
                                <label className='signUp__form-radio__label'>
                                    Client
                                    <input className='signUp__form-radio__input'type="radio" name="user" value="client"/>
                                </label>
                            </div>
                        </div>
                        <div className='signUp__form-right'> 
                            <Input type="text" name="city" label="City"/>
                            <Input type="text" name="state" label="State"/>
                            <Input type="email" name="password" label="Password"/>
                            <Input type="password" name="confirmPassword" label="Confirm Password"/>
                        </div>
                    </div>
                    <button className='signUp__btn' type="submit">Register</button>
                    <div className='signUp__login'>
                        <p className='signUp__login__body'>Already have an account?</p>
                        <Link to="/portal" className='signUp__login__link'>Sign-In</Link>
                    </div>
                </form>
            </section>
        </main>
    );
}

