import axios from 'axios';
const API_Key = process.env.REACT_APP_API_KEY;
const API_URL = 'http://api.weatherapi.com/v1/forecast.json';

export const getWeather = async (city) => {
    try {
        const data = await axios.get(`${API_URL}?key=${API_Key}&q=${city}&days=5&aqi=no&alerts=yes`)
        return data;
    }
    catch (error) {
        throw error;
    }
}