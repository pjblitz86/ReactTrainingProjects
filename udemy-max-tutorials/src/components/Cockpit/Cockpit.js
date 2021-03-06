import React from 'react';
import classes from './Cokcpit.css';
import Hoc from '../../hoc/Hoc';

const cockpit = props => {
  // adding classes dynamically to the component
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <Hoc>
      <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>this is really working</p>
        <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
        </button>
        <button onClick={props.login}>Login</button>
      </div>
    </Hoc>
  );
};

export default cockpit;
