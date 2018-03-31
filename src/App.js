import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        App

        <Link to="/wizard/step1">
          Create a new property
        </Link>
      </div>
    );
  }
}

export default App;
