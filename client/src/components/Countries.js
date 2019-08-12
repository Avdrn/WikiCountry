import React from 'react';
import "./Countries.css";
import {Link} from "react-router-dom";
import myCountries from "./countries.json";

export default () => {
 
  return (
    <div className="countries-container">
      <h2>Countries</h2>
      {myCountries.map((countries) => {
        return (
        <div className="country-container" >
            <Link to={`/details/${countries.cca3}`} >
                <div key={countries.cca3}>
                    <h3>
                    {countries.name.common} {countries.flag}
                    </h3>
                </div>
            </Link> 
        </div>
        )
      })}
    </div>
  )
}