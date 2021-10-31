import React, { Component } from "react";
import PlayerCard from "./PlayerCard.js";
import CrabGoddess from "./CrabGoddess.js";
class App extends Component {
  render() {
    return (
      <div className="App">
      <CrabGoddess />
        <PlayerCard />
      </div>
    );
  }
}

export default App;
