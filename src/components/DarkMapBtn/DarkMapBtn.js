import './DarkMapBtn.scss';
import React from 'react';

export default function DarkMapBtn({ onClick }) {
    return (
        <div class="container">
            <div class="daynight">
                <label className='btn'>
                    <input onClick={onClick} type="checkbox" name="" id="checkbox" />
                    <div class="toggle">
                        <div class="cloud"></div>
                        <div class="star"></div>
                        <div class="sea"></div>
                        <div class="mountains"></div>
                    </div>
                </label>
            </div>
        </div>
    );
}

