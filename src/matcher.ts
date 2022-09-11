import { Value as Tide, HourlyForecast } from "./types";
import { toLocalTime } from "./time";

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

    return [...matches, ...(goodWeather.length > 0 ? [{ tide, weather: goodWeather }] : [])];
  }, []);
};

export const printMatches = (matches: Match[]) => {
  const messages = ["Kayak timing forecast report:"];
  messages.push(`Found ${matches.length} good kayaking time slots in the short future.`);

  matches.forEach(({ tide, weather }) => {
    messages.push(`High tide will be at ${toLocalTime(tide.time)}.`);
    weather.forEach(
      ({
        DateTime,
        Wind: {
          Speed: { Value, Unit },
        },
      }) => {
        messages.push(`Wind speed will be ${Value}${Unit} at ${toLocalTime(DateTime)}.`);
      }
    );
  });

  console.log(messages.join(" "));
};
