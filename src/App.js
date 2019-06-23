
import React, { Component } from 'react';
import './App.css';
import FakeWeather from "./fakeWeather"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import fakeData from "./data/fakeData"
import  clear from "./img/weather-icons/clear.svg"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : ""
    }};
async componentDidMount (){
  const fetchData = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=8&units=metric&appid=9373a533f72bd06e719d74130924ae6e") 
const weatherData = await fetchData.json()
this.setState ({
  data:weatherData
})
}

    render() {
      return (

      <div className="app">
    
        <header className="app__header">
          <input className="countrySearch"/> 
          <button className="find-Weather">  FIND WEATHER </button> 
          
          </header>


        <main className="app__main">       
            <img className="main-image" src={fakeData.list[1].weather[0].id === 800 ? clear : mostlycloudy} alt="mostlycloudy"/> 
            <p className="overcast"> {this.state.data !=="" && this.state.data.list[1].weather[0].description}</p>
            <p className= "temperature"> <span className = "bold"> Temperature </span>10 ° to 11 °C </p>
            <pre> <span className="bold"> Humidity</span> {fakeData.list[0].main.humidity}   <span className="bold"> Pressure </span> {fakeData.list[0].main.pressure}</pre> 
          
          <FakeWeather data = {fakeData}/>
        </main>

      </div>
   
  )
      }
     }
    
export default App;
