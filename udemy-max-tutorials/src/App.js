import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>this is really working</p>
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );
    // other way - this is under the hood
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'does this work')
    // );
  }
}

export default App;
