import React, { Component } from 'react';

import './HeroForm.scss';

class HeroForm extends Component {
  render() {
    return (
      <div className="HeroForm">
        <h1>Select a hero</h1>
        <select class="form-control form-control-lg">
          <option>Large select</option>
        </select>
      </div>
    );
  }
}

export default HeroForm;
