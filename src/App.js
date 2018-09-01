import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h1>Hello Karen!</h1>
        <p className="App-intro">
          Welcome to my App.
          It is not working properly at the moment
        </p>
      </div>
    );
  }
}

export default App;
