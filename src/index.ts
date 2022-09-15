import * as dotenv from "dotenv";
import { from, forkJoin, map } from "rxjs";
import { getWeatherForecast } from "./weatherForecast";
import { getTideForecast, onlyDaytimeTide, onlyHighTide } from "./tideForecast";
import { matchHighTideWithGoodWeather, printMatches } from "./matcher";

dotenv.config();

(function () {
  const coordinate = { lat: -36.83, long: 174.79 };
  const weatherForecast = from(getWeatherForecast());
  const highTideForecast = from(getTideForecast(coordinate))
    .pipe(map((tideData) => tideData && onlyHighTide(tideData)))
    .pipe(map((tideValues) => tideValues && onlyDaytimeTide(tideValues)(coordinate)));

  forkJoin({ weather: weatherForecast, highTides: highTideForecast })
    .pipe(map(({ highTides, weather }) => highTides && weather && matchHighTideWithGoodWeather(highTides, weather)))
    .subscribe((matches) => matches && printMatches(matches));
})();
