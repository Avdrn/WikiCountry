
import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";

function App() {
  return (
  <div>
    <h1 className="title">Wiki Countries</h1>

    <div className="app-container">
        <Countries />
        <Route exact path="/" component={Home} />
        <Route path="/details/:cca3" component={CountryDetails} />
    </div>
  </div>
  );
}

export default App;