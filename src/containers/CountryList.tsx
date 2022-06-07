import CountryCard from "../components/country-card";
import { useQuery } from "react-query";
import { getAllCountries } from "../api/country";
import { Country } from "../country";
import { useState } from "react";

function CountryList() {
  const [search, setSearch] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const { data, status } = useQuery("allCountries", getAllCountries);

  const countriesData = data?.data;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>An error has occured.</div>;
  }

  return (
    <>
      <div className="my-6 flex flex-col">
        <i></i>
        <input
          className="p-2"
          placeholder="Search for a country"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
        <select name="region">
          <option defaultValue={""} onClick={() => setFilterRegion("")}>
            Filter by region
          </option>
          <option onClick={() => setFilterRegion("Africa")}>Africa</option>
          <option onClick={() => setFilterRegion("Americas")}>Americas</option>
          <option onClick={() => setFilterRegion("Asia")}>Asia</option>
          <option onClick={() => setFilterRegion("Europe")}>Europe</option>
          <option onClick={() => setFilterRegion("Oceania")}>Oceania</option>
        </select>
      </div>

      <div className="w-full px-4 bg-slate-100">
        {countriesData
          .filter((country: Country) => country.region?.includes(filterRegion))
          .filter((country: Country) => {
            if (
              country.name.common.toLowerCase().includes(search.toLowerCase())
            ) {
              return country;
            }
          })
          .map((country: Country, index: Number) => (
            <CountryCard data={country} key={index} />
          ))}
      </div>
    </>
  );
}

export default CountryList;
