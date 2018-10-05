import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Hoc from '../../../hoc/Hoc';

class Person extends Component {
  constructor(props) {
    super(props); // must be called
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }
  render() {
    console.log('[Person.js] Inside render');
    return (
      <Hoc>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i am {this.props.age}{' '}
          years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Hoc>
    );
  }
}

export default withClass(Person, classes.Person);
