import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, label } = this.props;

    return (
      <label htmlFor={ id }>
        {label}

        <input id={ id } { ...this.props } />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
