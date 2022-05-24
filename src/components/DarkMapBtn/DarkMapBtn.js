import './DarkMapBtn.scss';
import React from 'react';

export default function DarkMapBtn({ onClick }) {
    return (
        <div className="container">
            <div className="daynight">
                <label className='btn'>
                    <input onClick={onClick} type="checkbox" name="" id="checkbox" />
                    <div className="toggle">
                        <div className="cloud"></div>
                        <div className="star"></div>
                        <div className="sea"></div>
                        <div className="mountains"></div>
                    </div>
                </label>
            </div>
        </div>
    );
}

