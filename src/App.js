import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">

        <header className="app__header">
          <input className="countrySearch"/> 
          <button className="find-Weather">  FIND WEATHER </button> 
         </header>

        <main className="app__main">       
          <img src="https://placekitten.com/200/300" alt="placekitten.com"/> 

          
          <input/>
          Temperature <button> </button>
          humidity <button></button>              pressure <button></button>

        </main>

      </div>
    );
  }
}

export default App;
