import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  

  const handleVisitedCountry = (country) => {
    console.log("add this to your visit Country");
    const newVisitedCountries = [...visitCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = flag =>{
    console.log('flag adding');
    const newVisitedFlag=[...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag)
  }
  //remove item from an array in a state
  // use filter to select all the elements except the one you want to remove
  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      {/* Visited Countries */}
      <div>
        <h5>Visit the countries : {visitCountries.length}</h5>
        <ul>
            {
                visitCountries.map(country => <li>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="flag-container">
            {
                visitedFlags.map((flag,idx) =><img key={idx} src={flag}></img>)
            }
      </div>
      {/* display Countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
