import axios from 'axios';

const API_KEY = '61ded5c1ca3e2ea879b54345ac79b74f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request in actions file: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
