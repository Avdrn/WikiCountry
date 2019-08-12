import React, {Component} from 'react';
import "./CountryDetails.css";
import {Link} from "react-router-dom";
import axios from 'axios';  


class CountryDetails extends Component {

    constructor(){
        super()
        this.state = {
            countries: undefined
        }
    }

    componentDidMount() {
      axios.get("http://localhost:3000/countries")
      .then(response => {
        this.setState({countries: response.data})
      })
    }

    render() {
      let foundCountry
      let getCountry
      if(this.state.countries){
        getCountry = (cca3) => {
          let found = this.state.countries.find(oneCountry => {
            return oneCountry.cca3 === cca3;
          })
          return found;
        };
        const params = this.props.match.params;
        foundCountry = getCountry(params.cca3);
    }
      return (
        <div className="county-details-container">
          {this.state.countries ? 
          <>
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
          </>
          : null}
        </div>
      )

    }
}

export default CountryDetails;