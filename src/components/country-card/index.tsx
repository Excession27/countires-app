import { Link } from "react-router-dom";
import { CountryType } from "../../api/country/types";

const CountryCard: React.FC<any> = (prop: { data: CountryType }) => {
  const { name, population, region, capital, flags, ccn3 } = prop.data;
  return (
    <Link
      className="sm:h-100 mb-16 rounded-lg bg-slate-50 drop-shadow-lg dark:bg-gray-600 sm:m-0 sm:w-72 md:w-60"
      to={`/code/${ccn3}`}
    >
      <img src={flags?.svg} className="w-full rounded-t-lg" alt="" />
      <div className="pl-6 pt-4 pb-8">
        <h2 className="my-4 text-lg font-bold">{name?.common}</h2>
        <div className="my-1 flex">
          <p className="mr-1 font-semibold">Population:</p>
          <p>{Number(population).toLocaleString()}</p>
        </div>
        <div className="my-1 flex">
          <p className="mr-1 font-semibold">Region:</p>
          <p>{region}</p>
        </div>
        <div className="my-1 flex">
          <p className="mr-1 font-semibold">Capital:</p>
          <p>{capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
