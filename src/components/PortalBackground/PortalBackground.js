import './PortalBackground.scss';
import React from 'react';
import background from '../../assets/images/login-background.mp4';


function PortalBackground(props) {
    return (
        <div className="video-wrapper">
            <video className="video" playsInline autoPlay="autoplay" muted loop={true}>
                <source src={background} type="video/mp4" />
            </video>
        </div>
    );
}

export default PortalBackground;