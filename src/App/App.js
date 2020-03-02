import React, { Component } from 'react';

import HeroForm from './components/HeroForm/HeroForm';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heroes and Villains</h1>
        <HeroForm/>
      </div>
    );
  }
}
export default App;
