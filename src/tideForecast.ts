import axios from "axios";
import { TideData } from "./types";

const TIDE_FORECAST_API_URL = "https://api.niwa.co.nz/tides/data";

interface coordinate {
  lat: string;
  long: string;
}

export const getTideForecast = ({ lat, long }: coordinate) =>
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
