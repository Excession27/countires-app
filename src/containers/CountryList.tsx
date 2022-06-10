import CountryCard from "../components/country-card";
import { useQuery } from "react-query";
import {
  getAllCountries,
  getCountriesByRegion,
  getCountriesByName,
} from "../api/country";
import { CountryType } from "../api/country/types";
import { useState } from "react";
import AsyncComponent from "../components/hoc/AsyncComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function CountryList() {
  const [filter, setFilter] = useState<{ name: string; region: string }>({
    name: "",
    region: "",
  });

  const { data: countries, status: countriesStatus } = useQuery(
    ["all-countries", filter],
    async () => {
      let response;
      if (filter?.name) {
        response = await getCountriesByName(filter.name);
        if (filter?.region) {
          response.data = response?.data.filter(
            (country: CountryType) => country.region === filter.region
          );
        }
      } else if (filter?.region) {
        response = await getCountriesByRegion(filter.region);
      } else response = await getAllCountries();

      return response?.data ?? [];
    }
  );

  const setFilterName = (value: string) => {
    setFilter((p) => ({ ...p, name: value }));
  };

  const setFilterRegion = (value: string) => {
    setFilter((p) => ({ ...p, region: value }));
  };

  return (
    <div className="mb-10 pb-10">
      <div className="search-filter flex flex-col py-6 px-4 dark:bg-gray-800 sm:flex-row sm:place-content-between">
        <div className="flex items-center sm:w-1/3">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="rounded-l-lg p-3 dark:bg-gray-600 dark:text-slate-200"
          />
          <input
            className="w-full rounded-r-lg px-1 py-2 dark:bg-gray-600 dark:text-slate-200"
            placeholder="Search for a country"
            onChange={(event) => {
              setFilterName(event.target.value);
            }}
          ></input>
        </div>
        <select
          name="region"
          className="my-4 h-10 w-1/3 rounded-lg p-2 dark:bg-gray-600 dark:text-slate-200 sm:w-1/5"
          onChange={(event) => {
            setFilterRegion(event.target.value);
          }}
        >
          <option defaultValue={""}>Filter by region </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="h-full w-full bg-slate-50 px-4 dark:bg-gray-800 dark:text-slate-200 sm:flex sm:flex-auto sm:flex-wrap sm:place-content-around sm:gap-3">
        <AsyncComponent
          component={
            <>
              {countries?.map((country: CountryType, index: Number) => (
                <CountryCard data={country} key={index} />
              ))}
            </>
          }
          status={countriesStatus}
        />
      </div>
    </div>
  );
}

export default CountryList;
