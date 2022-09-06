import axios from "axios";
import { Tide } from "./types";

const TIDE_FORECAST_API_URL = "https://api.niwa.co.nz/tides/data";

export const getTideForecast = () =>
  axios
    .get<Tide>(`${TIDE_FORECAST_API_URL}`, {
      params: {
        lat: "-39.97049163816615",
        long: "174.96035766126963",
        numberOfDays: 1,
        startDate: "2022-09-05",
      },
      headers: {
        "x-apikey": process.env.NIWA_API_KEY as string,
      },
    })
    .then((response) => response.data)
    .catch(function (err) {
      console.error(err);
    });
