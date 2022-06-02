import './CountryPage.css';
import { Country } from '../country'

const CountryCard: React.FC<any> = (prop: {data: Country}) => {
    
    return (
        <div className="card">
            <img src={prop.data.flags?.svg} alt="" />
            <div className="card__info">

                <h2 className="card__country-name text-3xl font-bold">{prop.data.name.common}</h2>

                <div className="card__stats">
                    <p className='card__stats__native-name'>Native name: {}</p>
                    <p className="card__stats__population">Population: {prop.data.population}</p>
                    <p className="card__stats_region">Region: {prop.data.region}</p>
                    <p className="card__stats_sub-region">Sub Region: {prop.data.subregion}</p>
                    <p className="card__stats__capital">Capital: {prop.data.capital}</p>
                </div>

                <div className="card__stats-cont">
                    <p className="card__stats-cont__top-lvl-domain">Top level domain: {prop.data.tld}</p>
                    <p className="card__stats-cont__currencies">Currencies: {prop.data.currencies ? Object.entries(prop.data.currencies)[0][1].name : ""}</p>
                    {/* <p className="card__stats-cont__currencies">Currencies: {prop.data.currencies ? Object.entries(prop.data.currencies).reduce((previousValue, currentValue) =>  currentValue[1].name) : ""}</p> */}
                    <p className="card__stats-cont__lang">Languages: {prop.data.languages ? Object.values(prop.data.languages).reduce((previousValue, currentValue) =>  previousValue + ", " + currentValue) : "" }</p>
                </div>
                <div className="card__border-countries">
                    {/* {prop.data.borders.map( name => {
                        
                        return (
                            <li>{name}</li>
                        )
                    })
                    } */}
                </div>
            </div>
        </div>
    );
}

export default CountryCard;