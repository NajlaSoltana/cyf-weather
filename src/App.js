
import React, { Component } from 'react';
import './App.css';
import FakeWeather from "./fakeWeather"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import fakeData from "./data/fakeData"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }};


    render() {
      return (

      <div className="app">
    
        <header className="app__header">
          <input className="countrySearch"/> 
          <button className="find-Weather">  FIND WEATHER </button> 
          
          </header>


        <main className="app__main">       
            <img className= "main-image" src={mostlycloudy} alt="mostlycloudy"/> 

           
          <p className = "overcast"> overcast clouds</p>
            <p className= "temperature"> <span className = "bold"> Temperature </span>10 ° to 11 °C </p>
            <pre> <span className="bold"> Humidity</span> 78%   <span className="bold"> Pressure </span> 1008.48</pre> 
          
          <FakeWeather data = {fakeData}/>
        </main>

      </div>
   
  )
      }
     }
    
export default App;
