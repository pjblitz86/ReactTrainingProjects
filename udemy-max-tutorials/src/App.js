import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'PJ', age: 24 }, { name: 'Jonas', age: 25 }],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 24 }, { name: 'Jonas', age: 25 }]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [{ name: 'Paul', age: 25 }, { name: event.target.value, age: 27 }]
    });
  };

  render() {
    // inline styling it's scoped to component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // hover is kinda difficult to implement
    };

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={() => this.switchNameHandler('Paulianus!!!')}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

        {this.switchNameHandler}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangeHandler}
        >
          Hobbies: racing
        </Person>
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
