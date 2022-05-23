import './SignUpPage.scss';
import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import PortalBackground from '../../components/PortalBackground/PortalBackground';
import video from '../../assets/videos/portal_login.mp4';


export default function SignUpPage() {


    return (
        <main className='signUp-page'>
            <PortalBackground video={video} />
            <section className='signUp'>
                <SignUpForm />
            </section>
        </main>
    );
}      
