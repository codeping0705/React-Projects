import React, { useState } from 'react';
import './Weather.css';
import ClearSkyImg from './assets/clearsky.jpg';
import CloudyImg from './assets/cloud.jpg';
import HazeImg from './assets/hazy.jpg';
import MistImg from './assets/misty.jpg';
import RainyImg from './assets/rain.jpg';
import SnowingImg from './assets/snowy.jpg';
import StormImg from './assets/stormy.jpg';

const api = {
    key: 'fa07dd63fbc20097a5d21be85a86c2b2',
    base: "https://api.openweathermap.org/data/2.5/"
};

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const getWeatherBackground = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Clear':
                return ClearSkyImg;
            case 'Clouds':
                return CloudyImg;
            case 'Haze':
                return HazeImg;
            case 'Rain':
                return RainyImg;
            case 'Snow':
                return SnowingImg;
            case 'Thunderstorm':
                return StormImg;
            case 'Mist':
                return MistImg;
            default:
                return null;
        }
    };

    const search = event => {
        if (event.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(response => response.json())
                .then(data => {
                    setWeather(data);
                    setQuery("");
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }
    };

    const dateBuilder = (d) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const day = days[d.getDay()];
        const date = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div className='Phone'>
            <main className="weather-container" style={{ backgroundImage: `url(${getWeatherBackground(weather.weather ? weather.weather[0].main : null)})` }}>
                <div className='search-box'>
                    <input type="text" className="search-bar"
                        id="input" placeholder='Enter the City'
                        value={query} // Set input value to query state
                        onChange={e => setQuery(e.target.value)}
                        onKeyPress={search} />
                </div>
                {(typeof weather.main !== "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">
                                {weather.name},{weather.sys.country}
                            </div>
                            <div className="date">
                                {dateBuilder(new Date())}
                            </div>
                        </div>

                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}°C
                            </div>
                            <div className="weather">
                                {weather.weather[0].main}
                            </div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    )
}

export default Weather;
