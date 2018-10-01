import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'PJ', age: 24 }, { name: 'Jonas', age: 25 }],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // other way - this is what happens under the hood using JSX
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'does this work')
    // );
  }
}

export default App;
