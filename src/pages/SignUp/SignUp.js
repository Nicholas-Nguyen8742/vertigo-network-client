import './SignUp.scss';
import React from 'react';
import PortalBackground from '../../components/PortalBackground/PortalBackground';
import Input from '../../components/Input/Input';
import video from '../../assets/videos/portal_login.mp4';

function SignUp() {
    return (
        <main className='signUp-page'>
            <PortalBackground video={video}/>
            <section className='signUp'>
                <form className='signUp__form' > 
                    <h2 className='signUp__title'>Sign-Up</h2>
                    <div className='signUp__form-left'>
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                    <div className='signUp__form-right'> 
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                </form>
            </section>
        </main>
    );
}

export default SignUp;