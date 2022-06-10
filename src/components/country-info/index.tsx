//import { CountryType } from "../../api/country/types";
import { FC, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountriesByCode } from "../../api/country";
import { CountryType } from "../../api/country/types";
import Btn from "../btn";

const CountryInfo: FC<any> = () => {
  const { countryCode } = useParams<string>();
  const { data: country } = useQuery<CountryType>(
    ["country-by-code", countryCode],
    async () => {
      let response = await getCountriesByCode(countryCode);
      return response.data[0];
    }
  );
  const [borderingCountries, setBorderingCountries] = useState<any>([]);

  const {
    name,
    borders,
    population,
    region,
    subregion,
    tld,
    capital,
    flags,
    currencies,
    languages,
  } = country ?? {};

  const border = useQuery<any>(["bordering-countries", borders], () => {
    borders?.map(async (code) => {
      let response = await getCountriesByCode(code);

      setBorderingCountries((prev: any) => [...prev, response.data]);
    });
  });

  const getCurrencies = useCallback((currencies: any) => {
    let allCurrencies: any = [];
    let result: any = "";

    if (currencies !== undefined) {
      allCurrencies = Object.values(currencies);

      result = allCurrencies.reduce((acc: any, current: any) => {
        if (acc.name === undefined) {
          return "";
        }
        return acc.name.concat(", ", current.name);
      });
    }

    if (currencies === undefined) {
      return result;
    }

    return result.name === undefined ? result : result.name;
  }, []);

  return (
    <div className="card px-6 dark:bg-gray-800 dark:text-slate-200">
      <div className="mt-6">
        <Btn link={"/"} text={"<-- Back"} />
      </div>
      <div>
        <img
          src={flags?.svg}
          alt={`Flag of ${name?.common}`}
          className="pt-14"
        />
        <div className="card__info">
          <h2 className="card__country-name text-3xl font-bold pt-8">
            {name?.common}
          </h2>

          <div className="card__stats py-6 space-y-2">
            <p className="card__stats__native-name">Native name: {}</p>
            <p className="card__stats__population">
              Population: {population?.toLocaleString()}
            </p>
            <p className="card__stats_region">Region: {region}</p>
            <p className="card__stats_sub-region">Sub Region: {subregion}</p>
            <p className="card__stats__capital">Capital: {capital}</p>
          </div>

          <div className="card__stats-cont space-y-2">
            <p className="card__stats-cont__top-lvl-domain">
              Top level domain: {tld}
            </p>
            <p className="card__stats-cont__currencies">
              Currencies: {getCurrencies(currencies)}
            </p>
            <p className="card__stats-cont__lang">
              Languages:{" "}
              {languages &&
                Object.values(languages).reduce(
                  (previousValue, currentValue) =>
                    previousValue + ", " + currentValue
                )}
            </p>
          </div>
          <div className="card__border-countries mt-6 flex flex-wrap">
            <p>Borders:</p>

            <div className="flex flex-wrap gap-3">
              {borderingCountries.map((country: any, index: string) => {
                return (
                  <Btn
                    link={`/code/${country[0].ccn3}`}
                    text={`${country[0].name?.common}`}
                    key={index}
                  ></Btn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
