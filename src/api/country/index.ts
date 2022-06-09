import axios from "../../httpClient/axiosInstance";
import { APICall } from "../utils";
import { CountryType } from "./types";

export const getAllCountries = (): APICall<CountryType[]> => axios.get(`/all`);

export const getCountriesByName = (name: String): APICall<CountryType[]> =>
  axios.get(`/name/${name}`);

export const getCountriesByCode = (code?: String): APICall<CountryType[]> =>
  axios.get(`/alpha/${code}`);

export const getCountriesByRegion = (region: String): APICall<CountryType[]> =>
  axios.get(`/region/${region}`);
