import axios from "axios";
import { getSunrise, getSunset } from "sunrise-sunset-js";
import { TideData, Value } from "./types";

const TIDE_FORECAST_API_URL = "https://api.niwa.co.nz/tides/data";

interface Coordinate {
  lat: number;
  long: number;
}

export const getTideForecast = ({ lat, long }: Coordinate) =>
  axios
    .get<TideData>(`${TIDE_FORECAST_API_URL}`, {
      params: {
        lat,
        long,
        numberOfDays: 2,
      },
      headers: {
        "x-apikey": process.env.NIWA_API_KEY as string,
      },
    })
    .then((response) => response.data)
    .catch(function (err) {
      console.error(err);
    });

export const onlyHighTide = ({ metadata, values }: TideData) => {
  const averageTideHeight = Number(metadata.height.replace(/[^\d\.]/g, ""));

  return values.filter(({ value }) => value > averageTideHeight);
};

export const onlyDaytimeTide =
  (values: Value[]) =>
  ({ lat, long }: Coordinate) => {
    const nextSunrise = getSunrise(lat, long);
    const sunset = getSunset(lat, long);

    return values.filter(({ time }) => !(new Date(time) > sunset && new Date(time) < nextSunrise));
  };
