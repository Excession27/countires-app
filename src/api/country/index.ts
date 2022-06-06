import axios from "../../httpClient/axiosInstance";

export async function getCountriesByName(name: String) {
  const { data } = await axios.get(`/name/${name}`);
  return data;
}

export async function getAllCountries() {
  const { data } = await axios.get(`/all`);
  return data;
}

export async function getByCode(code: String) {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );
  return data;
}

export async function getByRegion(region: String) {
  const { data } = await axios.get(`/region/${region}`);
  return data;
}
