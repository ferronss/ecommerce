import React, { Component } from 'react';

const API_KEY = '70013a6aaaf7cb6e5b95e83dc07308d1'; // Sostituisci con la tua chiave api

export default class Weather extends Component {
  state = {
    weatherData: null,
    forecastData: null,
    cityName: '',
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Ottieni il nome della città dalla chiamata API
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
          .then(response => response.json())
          .then(weatherData => {
            console.log(weatherData); // Controlla i dati restituiti dall'API

            // Ottieni il nome della città dalla risposta dell api
            const cityName = weatherData.name;

            // Aggiorna lo stato con i dati ricevuti
            this.setState({ weatherData, cityName });

            // Chiamata api per ottenere la previsione del tempo
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
              .then(response => response.json())
              .then(forecastData => {
                console.log(forecastData); // Controlla i dati restituiti dall'API

                // Aggiorna lo stato con i dati della previsione del tempo
                this.setState({ forecastData });
              })
              .catch(error => {
                console.error('Errore nella chiamata API di OpenWeatherMap (forecast):', error);
              });
          })
          .catch(error => {
            console.error('Errore nella chiamata API di OpenWeatherMap (current weather):', error);
          });
      }, (error) => {
        console.error('Errore nella Geolocalizzazione:', error.message);
      });
    } else {
      console.error('La Geolocalizzazione non è supportata dal tuo browser.');
    }
  };

  render() {
    const { weatherData, forecastData, cityName } = this.state;

    return (
      <div style={{ marginTop: '20px' }}>
        <h1 style={{ fontSize: '3em' }}>Ti trovi a {cityName}</h1>
        {weatherData && (
         <div>
         {/* Converti la temperatura da Kelvin a Celsius */}
         <p style={{ fontSize: '3em', display: 'inline-block', background:'yellow'}}>Temperature: {parseFloat((weatherData.main.temp - 273.15).toFixed(1))} °C</p>
         <p style={{ fontSize: '3em', display: 'inline-block', marginLeft: '20px', background:'blue'}}>Meteo attuale: {weatherData.weather[0].description}</p>
       </div>
        )}
        {forecastData && (
          <div>
            <h2>Previsione del tempo:</h2>
            {forecastData.list.map((item, index) => (
              <p key={index}>{item.dt_txt}: {item.weather[0].description}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}
