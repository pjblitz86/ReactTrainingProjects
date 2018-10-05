import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Hoc from '../../../hoc/Hoc';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

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
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log('[Person.js] Inside render');
    return (
      <Hoc>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated!</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Hoc>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
