import './WeatherSection.scss';
import React from 'react';
import sunny from '../../assets/weather/sunny.svg';
import { epochConversion } from '../../utils/epochConversion';

export default function WeatherSection({ forecast, current }) {
    const d1 = epochConversion(forecast[0].date_epoch);
    const d2 = epochConversion(forecast[1].date_epoch);
    const d3 = epochConversion(forecast[2].date_epoch);

    return (
        <section className='weather'>
            <h2 className='weather__title'>Weather</h2>
            <article className='weather__card'>
                <div className='weather-top'>
                    <img className='weather__icon-top' src={sunny} alt='' />
                    <span className='weather__temp-top'>{current.feelslike_f}&deg;</span>
                    <h2 className='weather__location'>Orlando, FL</h2>
                </div>
                <div className='weather-bottom'>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>{d1}</h3>
                        <img className='weather__icon' src={forecast[0].day.condition.icon} alt=''/>
                        <h4 className='weather__temp'>{forecast[0].day.avgtemp_f}&deg;</h4>
                    </div>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>{d2}</h3>
                        <img className='weather__icon' src={forecast[1].day.condition.icon} alt=''/>
                        <h4 className='weather__temp'>{forecast[1].day.avgtemp_f}&deg;</h4>
                    </div>
                    <div className='weather-bottom-group'>
                        <h3 className='weather__day'>{d3}</h3>
                        <img className='weather__icon' src={forecast[2].day.condition.icon} alt=''/>
                        <h4 className='weather__temp'>{forecast[2].day.avgtemp_f}&deg;</h4>
                    </div>
                </div>
            </article>
        </section>
    );
}

