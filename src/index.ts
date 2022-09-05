import * as dotenv from "dotenv";
import { getWeatherForecast } from "./weatherForecast";

dotenv.config();

async function predictSuitableKayakTimes() {
  const weatherForecastData = await getWeatherForecast();
  console.log(weatherForecastData);
}

predictSuitableKayakTimes();
