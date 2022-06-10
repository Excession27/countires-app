import { FC, useCallback } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountriesByCode } from "../../api/country";
import { CountryType } from "../../api/country/types";
import Btn from "../btn";
import BorderBtn from "../border-btn";

const CountryInfo: FC<any> = () => {
  const { countryCode } = useParams<string>();

  const { data: country } = useQuery<CountryType>(
    ["country-by-code", countryCode],
    async () => {
      let response = await getCountriesByCode(countryCode);
      return response.data[0];
    }
  );

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
    <div className="card px-6 dark:bg-gray-800 dark:text-slate-200 md:px-20">
      <Btn link={"/"} text={"<-- Back"} />

      <div className=" sm:flex sm:gap-8">
        <img
          src={flags?.svg}
          alt={`Flag of ${name?.common}`}
          className="aspect-auto pt-14 sm:h-1/2 sm:w-1/2 xl:h-1/3 xl:w-1/3"
        />
        <div className="card__info sm:w-1/2">
          <h2 className="card__country-name pt-8 text-3xl font-bold">
            {name?.common}
          </h2>

          <div className="card__stats space-y-2 py-6">
            <p className="card__stats__native-name">
              <span className="font-semibold">{`Native name:`}</span>{" "}
              {name?.nativeName[Object.keys(name?.nativeName)[0]].common}
            </p>
            <p className="card__stats__population">
              <span className="font-semibold">Population:</span>{" "}
              {population?.toLocaleString()}
            </p>
            <p className="card__stats_region">
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p className="card__stats_sub-region">
              <span className="font-semibold">Sub Region:</span> {subregion}
            </p>
            <p className="card__stats__capital">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>

          <div className="card__stats-cont space-y-2">
            <p className="card__stats-cont__top-lvl-domain">
              <span className="font-semibold">Top level domain:</span> {tld}
            </p>
            <p className="card__stats-cont__currencies">
              <span className="font-semibold">Currencies:</span>{" "}
              {getCurrencies(currencies)}
            </p>
            <p className="card__stats-cont__lang">
              <span className="font-semibold">Languages:</span>{" "}
              {languages &&
                Object.values(languages).reduce(
                  (previousValue, currentValue) =>
                    previousValue + ", " + currentValue
                )}
            </p>
          </div>
          <div className="card__border-countries my-6 flex flex-wrap gap-2">
            <span className="font-semibold">Border countries:</span>

            <div className="flex flex-wrap gap-3">
              {(borders || []).map((code: string, index: number) => {
                return <BorderBtn key={index} code={code}></BorderBtn>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
