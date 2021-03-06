import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
