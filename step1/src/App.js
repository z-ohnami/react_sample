import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Caharl" />
        <Welcome name="Edite" />
      </div>
    );
  }
}

export default App;
