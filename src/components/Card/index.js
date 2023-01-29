import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">
          { cardName }
        </h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <span data-testid="description-card">
          { cardDescription }
        </span>
        <h4 data-testid="attr1-card">
          { cardAttr1 }
        </h4>
        <h4 data-testid="attr2-card">
          { cardAttr2 }
        </h4>
        <h4 data-testid="attr3-card">
          { cardAttr3 }
        </h4>
        <span data-testid="rare-card">
          { cardRare }
        </span>
        {
          cardTrunfo
            ? <h3 data-testid="trunfo-card">Super Trunfo</h3>
            : ''
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
