import './PortalBackground.scss';
import React from 'react';

export default function PortalBackground({ video }) {
    return (
        <div className="video-wrapper">
            <video className="video" playsInline autoPlay="autoplay" muted loop={true}>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

