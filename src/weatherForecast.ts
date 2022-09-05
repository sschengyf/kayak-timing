import axios from "axios";
import type { HourlyForecast } from "./types";

const WEATHER_FORECAST_API_URL = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/252066";

export const getWeatherForecast = () =>
  axios
    .get<[HourlyForecast]>(`${WEATHER_FORECAST_API_URL}`, {
      params: {
        apikey: process.env.ACCU_WEATHER_API_KEY,
        details: true,
        metric: true,
      },
    })
    .then((response) => response.data)
    .catch(function (err) {
      console.error(err);
    });
