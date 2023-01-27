import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
      <label htmlFor="select-input">
        Raridade
        <select id="select-input" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}
