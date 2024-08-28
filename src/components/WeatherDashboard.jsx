import React, { Component } from 'react';
import CityInputForm from './CityInputForm';


class WeatherDashboard extends Component {
  state = {
    weatherData: null,
    recentSearches: JSON.parse(localStorage.getItem('recentSearches')) || [],
  };

  fetchWeatherData = async (city) => {
    const apiKey = '6e35ae743d6d73955f7860b6ae13e58c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        this.setState({ weatherData: data });
        const newSearches = [...this.state.recentSearches, city];
        this.setState({ recentSearches: newSearches });
        localStorage.setItem('recentSearches', JSON.stringify(newSearches));
      } else {
        console.error('Error fetching weather data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  render() {
    return (
      <div className="container mx-auto p-4 pt-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Weather Dashboard</h1>
        <CityInputForm fetchWeatherData={this.fetchWeatherData} />
        {this.state.weatherData && (
          <div className="mt-4 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-2">Weather Data</h2>
              <p className="text-gray-700">Temperature: {this.state.weatherData.main.temp}°C</p>
              <p className="text-gray-700">Weather: {this.state.weatherData.weather[0].description}</p>
              <p className="text-gray-700">Humidity: {this.state.weatherData.main.humidity}%</p>
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default WeatherDashboard;
