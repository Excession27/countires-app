import { Country } from "../../country";
import { getAllCountries } from "../../api/country";
import { useEffect } from "react";

const CountryCard: React.FC<any> = () => {
  return (
    <div className="CountryCard">
      <img src="" alt="" />
      <div className="info">
        <h2>Component test</h2>
        <p>Population: test</p>
        <p>Region: test</p>
        <p>Capital: test</p>
      </div>
    </div>
  );
};

export default CountryCard;
