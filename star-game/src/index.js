import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class component with state
class Button extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}

// function component
const Result = props => {
  return <div>...</div>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <Result />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
