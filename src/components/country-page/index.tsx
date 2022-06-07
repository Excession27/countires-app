import "./CountryPage.css";
import { CountryType } from "../../api/country/types";
import { FC, useCallback, useState } from "react";

const CountryPage: FC<any> = (prop: { data: CountryType }) => {
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
  } = prop.data;
  const [bordering, setBordering] = useState<Array<Object>>([]);

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

  // const getBorderingList = useCallback((country: String) => {
  //   async function getData() {
  //     const response = await axios.get(
  //       `https://restcountries.com/v3.1/alpha/${country}`
  //     );

  //     const result = response.data[0].name.common;
  //     console.log("result");
  //     console.log(result);

  //     //setBordering((previousArray) => [...previousArray, { name: result }]);
  //     setBordering([...bordering, { name: result }]);
  //   }
  //   getData();
  // }, []);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get(
  //       "https://restcountries.com/v3.1/name/germany"
  //     );
  //     const info = await response.data;

  //     return info;
  //   }
  //   getData();
  // }, []);

  // useEffect(() => {
  //   borders?.forEach((shorthand) => {
  //     getBorderingList(shorthand);
  //   });
  // }, [getBorderingList, borders]);

  return (
    <div className="card">
      <img src={flags?.svg} alt="" />
      <div className="card__info">
        <h2 className="card__country-name text-3xl font-bold">{name.common}</h2>

        <div className="card__stats">
          <p className="card__stats__native-name">Native name: {}</p>
          <p className="card__stats__population">Population: {population}</p>
          <p className="card__stats_region">Region: {region}</p>
          <p className="card__stats_sub-region">Sub Region: {subregion}</p>
          <p className="card__stats__capital">Capital: {capital}</p>
        </div>

        <div className="card__stats-cont">
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
        <div className="card__border-countries">
          <p>
            Borders:{" "}
            {bordering.map((country: any, index: Number) => {
              return <li key={index.toString()}>{country.name.common}</li>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
