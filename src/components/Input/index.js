import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, labeltext } = this.props;

    return (
      <label htmlFor={ id }>
        {labeltext}

        <input id={ id } { ...this.props } />
      </label>
    );
  }
}

Input.propTypes = {
  labeltext: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
