/* const fs = require('fs');
const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {q: 'London,uk', lang: 'null', units: 'metric', mode: 'json'},
  headers: {
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': 'f98a4b5e7dmsh410183877cec9b4p136fd8jsn6c09ff81a19e'
  }
};
const weatherData = axios.request(options).then(function (response) {
    return response.data

  }).catch(function (error) {
    console.error(error);
  }); */
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': 'f98a4b5e7dmsh410183877cec9b4p136fd8jsn6c09ff81a19e'
    }
  };
  async function getWeather() {
    const weather = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city.cityName}%2C${city.country}&lang=null&units=metric&mode=json`, options)
    return weather.json()
  }
  



