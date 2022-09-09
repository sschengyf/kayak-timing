import { Value as Tide, HourlyForecast } from "./types";

const ONE_MIN = 60 * 1000;
const THIRTY_MINS = ONE_MIN * 30;

interface Match {
  tide: Tide;
  weather: HourlyForecast[];
}

export const matchHighTideWithGoodWeather = (tides: Tide[], weather: HourlyForecast[]) => {
  return tides.reduce<Match[]>((matches, tide) => {
    const tideTime = new Date(tide.time);
    const thirtyMinsBeforeTide = new Date(tideTime.getTime() - THIRTY_MINS);
    const thirtyMinsAfterTide = new Date(tideTime.getTime() + THIRTY_MINS);

    const weatherInTideTimeRange = weather.filter((hourlyForecast) => {
      const forecastTime = new Date(hourlyForecast.DateTime);
      return (
        (forecastTime < tideTime && forecastTime > thirtyMinsBeforeTide) ||
        (forecastTime > tideTime && forecastTime < thirtyMinsAfterTide)
      );
    });

    const goodWeather = weatherInTideTimeRange.filter((hourlyForecast) => {
      return hourlyForecast.Wind.Speed.Value < 15;
    });

    if (goodWeather.length > 0) {
      matches.push({
        tide,
        weather: goodWeather,
      });
    }

    return matches;
  }, []);
};
