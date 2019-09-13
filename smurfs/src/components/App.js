import React, { Component } from "react";
import "./App.css";
import MainCard from './MainCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <MainCard />
      </div>
    );
  }
}

export default App;
