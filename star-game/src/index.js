import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class component with state
class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return <button onClick={this.handleClick}>+{this.props.incrementValue}</button>;
  }
}

// function component
const Result = props => {
  return <div>{props.counter}</div>;
};

// main component on which all are mounted
class App extends Component {
  state = { counter: 0 };
  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={20} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
