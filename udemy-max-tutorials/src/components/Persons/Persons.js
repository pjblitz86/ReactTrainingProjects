import React, { PureComponent } from 'react';
// PureComponent has in built shouldComponentUpdate lifecycle
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props); // must be called
    console.log('[Persons.js] Inside Constructor', props);
  }

  // MOUNT LIFECYCLE

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  // UPDATE LIFECYCLE
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // // for performance
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.Persons !== this.props.persons; // will stop component updating if false -  nothing changed; it will save performance
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
