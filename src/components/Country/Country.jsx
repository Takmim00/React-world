import { useState } from 'react';
import './country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} =country;

    const [visited, setVisited] = useState(false);

    const handleVisited= ()=>{
        setVisited(!visited)
    }

    // const passWithParams =()=>handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4 style={{color: visited ? 'purple' : 'white'}}>Name : {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark As visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visit Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this Country.' : 'I want to visit'}
            <hr />
            <CountryDetails country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></CountryDetails>
        </div>
    );
};

export default Country;
