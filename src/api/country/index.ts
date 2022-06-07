import axios from "../../httpClient/axiosInstance";
import { APICall } from "../utils";

export const getAllCountries = () => axios.get(`/all`);
//export const getAllCountries = () => axios.get(`/name/germany`);

export const getCountriesByName = (name: String): APICall<Array<String>> =>
  axios.get(`/name/${name}`);

export const getCountriesByCode = (code: String): APICall<Array<String>> =>
  axios.get(`/alpha/${code}`);

export const getCountriesByRegion = (region: String): APICall<Array<String>> =>
  axios.get(`/region/${region}`);
