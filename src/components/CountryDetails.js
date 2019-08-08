import React from 'react';
import "./CountryDetails.css";
import myCountries from "./countries.json";
import {Link} from "react-router-dom";


function CountryDetails (props) {
    const getCountry = (cca3) => {
      let found = myCountries.find(oneCountry => {
        return oneCountry.cca3 === cca3;
      })
      return found;
    };
  
  const params = props.match.params;
  const foundCountry = getCountry(params.cca3);

  return (
    <div className="county-details-container">
      <h1>{foundCountry.name.common}</h1>
      
      <div className = "county-details-container-all">
        <div className="county-details-container-objects">
          <div className="county-details-items">Capital</div>
          <div className="county-details-items">Area</div>
          <div className="county-details-items">Borders</div>
        </div>

        <div className="county-details-container-objects">
          <div className="county-details-items">{ foundCountry.capital }</div>
          <div className="county-details-items">{foundCountry.area}</div>
          
          { foundCountry.borders.map((border) => {
            let countryFound = getCountry(border)
            return (
          <div className="county-details-items">
            <Link to={`/details/${countryFound.cca3}`}>
              <li>{countryFound.name.common}</li>
            </Link>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default CountryDetails;