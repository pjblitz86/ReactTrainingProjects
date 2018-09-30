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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>this is really working</p>
        <button onClick={() => this.switchNameHandler('Paulianus!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

        {this.switchNameHandler}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
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
