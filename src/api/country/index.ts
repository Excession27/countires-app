import axios from "../../httpClient/axiosInstance";
import { APICall } from "../utils";
import { CountryType } from "./types";

export const getAllCountries = (): APICall<CountryType[]> => axios.get(`/all`);

export const getCountriesByName = (name: string): APICall<CountryType[]> =>
  axios.get(`/name/${name}`);

export const getCountriesByCode = (code?: string): APICall<CountryType[]> =>
  axios.get(`/alpha/${code}`);

export const getCountriesByRegion = (region: string): APICall<CountryType[]> =>
  axios.get(`/region/${region}`);
