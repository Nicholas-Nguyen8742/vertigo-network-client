import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY || '4c37fddc98cb4ebe921184929222305';
const API_URL = 'http://api.weatherapi.com/v1/forecast.json';

export const getWeather = async (city) => {
    try {
        const data = await axios.get(`${API_URL}?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=yes`)
        return data;
    }
    catch (error) {
        throw error;
    }
}

// const API_KEY = '4c123ca83366792f083f513da91e686f';
// const API_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';

// export const getWeather = async (city) => {
//     try {
//         const data = await axios.get(`${API_URL}${city}&appid=${API_KEY}`)
//         return data;
//     }
//     catch (error) {
//         throw error;
//     }
// } 