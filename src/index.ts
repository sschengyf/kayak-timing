import * as dotenv from "dotenv";
import { getWeatherForecast } from "./weatherForecast";
import { getTideForecast } from "./tideForecast";

dotenv.config();

async function predictSuitableKayakTimes() {
  const weatherForecastData = await getWeatherForecast();
  console.log(weatherForecastData);
}

predictSuitableKayakTimes();

async function predictTides() {
  const tides = await getTideForecast();
  console.log(tides);
}

predictTides();
