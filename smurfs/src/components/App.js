import React, { Component } from "react";
import "./App.css";
import MainCard from './MainCard'
import SmurfForm from './smurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <MainCard />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
