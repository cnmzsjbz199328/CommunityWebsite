import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';  // Ensure you have your CSS file for styling

function Weather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://api.open-meteo.com/v1/forecast';
        const params = {
            latitude: -35.0847,
            longitude: 138.5497,
            daily: 'temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max,precipitation_sum,precipitation_hours',
            timezone: 'auto'  // Ensure timezone handling as needed
        };

        axios.get(url, { params })
            .then(response => {
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading weather data...</div>;
    if (error) return <div>Error fetching weather data!</div>;
    if (!weather) return <div>No weather data found.</div>;

    return (
        <div className="weather-container">
            <h2>Weather Forecast</h2>
            {weather && (
                <>
                    <p>Maximum Temperature: {weather.daily.temperature_2m_max[0]}°C</p>
                    <p>Minimum Temperature: {weather.daily.temperature_2m_min[0]}°C</p>
                    <p>UV Index: {weather.daily.uv_index_max[0]}</p>
                    <p>Total Precipitation: {weather.daily.precipitation_sum[0]} mm</p>
                </>
            )}
        </div>
    );
}

export default Weather;
