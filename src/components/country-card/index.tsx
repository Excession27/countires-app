const CountryCard: React.FC<any> = (prop: any) => {
  console.log("CountryCard");
  console.log(prop);
  const {
    name,
    population,
    region,
    capital,
    flags,
  }: {
    name: any;
    population: String;
    region: String;
    capital: String;
    flags: any;
  } = prop.data;
  return (
    <div className="CountryCard mb-16 rounded-lg bg-slate-50 drop-shadow-lg">
      <img src={flags.svg} className="rounded-t-lg w-full" alt="" />
      <div className="pl-6 pt-4 pb-10">
        <h2 className="font-bold my-4 text-lg">{name.common}</h2>
        <div className="my-1 flex">
          <p className="font-semibold mr-1">Population:</p>
          <p>{Number(population).toLocaleString()}</p>
        </div>
        <div className="my-1 flex">
          <p className="font-semibold mr-1">Region:</p>
          <p>{region}</p>
        </div>
        <div className="my-1 flex">
          <p className="font-semibold mr-1">Capital:</p>
          <p>{capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
