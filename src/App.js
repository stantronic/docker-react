import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
          <h1>This is a React app running in a docker container on Elastic Beanstalk</h1>
        <p className="App-intro">
          Have a nice day.
        </p>
      </div>
    );
  }
}

export default App;
