import React from 'react';
import './Person.css';
import Radium from 'radium';

// functional component example with ES6 best practice
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
