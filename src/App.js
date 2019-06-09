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
          <input/> 
          <button>  Find Weather </button> 
         </header>

        <main className="app__main">


          <input/>
          Temperature <button> </button>
          humidity <button></button>              pressure <button></button>

        </main>

      </div>
    );
  }
}

export default App;
