import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    return (
      <label htmlFor="check-input">
        <input
          type="checkbox"
          id="check-input"
          data-testid="trunfo-input"
        />
        Super Trybe Trunfo
      </label>
    );
  }
}
