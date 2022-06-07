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
    <>
      <div className="my-6 flex flex-col">
        <i></i>
        <input
          className="p-2"
          placeholder="Search for a country"
          onChange={(event) => {
            setFilterName(event.target.value);
          }}
        ></input>
        <select
          name="region"
          onChange={(event) => {
            setFilterRegion(event.target.value);
          }}
        >
          <option defaultValue={""}>Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="w-full px-4 bg-slate-100">
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
    </>
  );
}

export default CountryList;
