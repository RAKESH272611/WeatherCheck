import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../store/action/actions';
import axios from 'axios';
import '../Assets/css/Weather.css'; 

const Weather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData);

  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWeatherData = async () => {
    const apiKey = '37e223d165192d8686a8f150a0a11124'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.get(url);
      const data = response.data;
      dispatch(setWeatherData(data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage('Failed to fetch weather data. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="weather-container">
      <h1 className="app-title">Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          className="weather-input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="weather-button" onClick={fetchWeatherData} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {weatherData && (
        <div className="weather-data">
          <h2 className="data-title">Weather Data</h2>
          <p className="data-item">Temperature: {Math.round(weatherData.main.temp - 273.15, 2)}°C</p>
          <p className="data-item">City: {weatherData.name}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
