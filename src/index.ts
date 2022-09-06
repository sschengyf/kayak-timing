import * as dotenv from "dotenv";
import { getWeatherForecast } from "./weatherForecast";
import { getTideData } from "./tideForecast";

dotenv.config();

async function predictSuitableKayakTimes() {
  const weatherForecastData = await getWeatherForecast();
  console.log(weatherForecastData);
}

predictSuitableKayakTimes();

async function predictTides() {
  const tideData = await getTideData({ lat: "-36.8329145419162", long: "174.79377033086192" });
  console.log(tideData);
}

predictTides();
