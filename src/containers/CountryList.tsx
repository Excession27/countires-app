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
import { Link } from "react-router-dom";

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
    <div className="pb-10 mb-10">
      <div className="py-6 px-4 flex flex-col dark:bg-gray-800">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="dark:text-slate-200 dark:bg-gray-600 p-3 rounded-l-lg"
          />
          <input
            className="px-1 py-2 dark:bg-gray-600 dark:text-slate-200 w-full rounded-r-lg"
            placeholder="Search for a country"
            onChange={(event) => {
              setFilterName(event.target.value);
            }}
          ></input>
        </div>
        <select
          name="region"
          className="dark:bg-gray-600 dark:text-slate-200 my-4 rounded-lg h-10 w-1/2 p-2"
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

      <div className="w-full h-full px-4 bg-slate-50 dark:bg-gray-800 dark:text-slate-200">
        <AsyncComponent
          component={
            <>
              {countries?.map((country: CountryType, index: Number) => (
                <Link to={`/code/${country.ccn3}`} key={index.toString()}>
                  <CountryCard data={country} key={index} />
                </Link>
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
