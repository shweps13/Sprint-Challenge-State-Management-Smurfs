import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'

import "./App.css";
import MainCard from './MainCard'
import SmurfForm from './smurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </header>
        <SmurfForm />
        <MainCard />

      </div>
    );
  }
}

export default App;
