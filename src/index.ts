import * as dotenv from "dotenv";
import { from, forkJoin, map } from "rxjs";
import { getWeatherForecast } from "./weatherForecast";
import { getTideForecast, onlyHighTide } from "./tideForecast";
import { matchHighTideWithGoodWeather } from "./matcher";

dotenv.config();

function predictSuitableKayakTimes() {
  const weatherForecast = from(getWeatherForecast());
  const highTideForecast = from(getTideForecast({ lat: "-36.8329145419162", long: "174.79377033086192" })).pipe(
    map((value) => value && onlyHighTide(value))
  );

  forkJoin({ weather: weatherForecast, highTides: highTideForecast }).subscribe({
    next: ({ highTides, weather }) => highTides && weather && matchHighTideWithGoodWeather(highTides, weather),
  });
}

predictSuitableKayakTimes();
