import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  render() {
    const { id } = this.props;

    return (
      <label htmlFor={ id }>
        <input id={ id } { ...this.props } />
        Super Trybe Trunfo
      </label>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};
