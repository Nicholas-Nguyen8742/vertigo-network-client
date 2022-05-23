import './WeatherSection.scss';
import React from 'react';
import sunny from '../../assets/weather/sunny.svg';

function WeatherSection() {
    return (
        <section className='weather'>
            <h2 className='weather__title'>Weather</h2>
            <article className='weather__card'>
                <div className='weather-top'>
                    <h2 className='weather__location'>Orlando, FL</h2>
                </div>
                <div className='weather-bottom'>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>SUN</h3>
                        <img className='weather__icon' src={sunny} alt=''/>
                        <h4 className='weather__temp'>86&deg;</h4>
                    </div>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>MON</h3>
                        <img className='weather__icon' src={sunny} alt=''/>
                        <h4 className='weather__temp'>86&deg;</h4>
                    </div>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>TUES</h3>
                        <img className='weather__icon' src={sunny} alt=''/>
                        <h4 className='weather__temp'>86&deg;</h4>
                    </div>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>WED</h3>
                        <img className='weather__icon' src={sunny} alt=''/>
                        <h4 className='weather__temp'>86&deg;</h4>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default WeatherSection;