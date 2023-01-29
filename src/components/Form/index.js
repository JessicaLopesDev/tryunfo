import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import Input from '../Input';
import Select from '../Select';

export default class Form extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

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
      // // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          name="cardName"
          data-testid="name-input"
          id="card-name"
          label="Nome"
          placeholder="Nome"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />

        <Input
          name="cardDescription"
          data-testid="description-input"
          id="card-description"
          label="Description"
          placeholder="Description"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <Input
          name="cardAttr1"
          data-testid="attr1-input"
          id="card-attr1"
          label="Attr01"
          placeholder="Attr01"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <Input
          name="cardAttr2"
          data-testid="attr2-input"
          id="card-attr2"
          label="Attr02"
          placeholder="Attr02"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <Input
          name="cardAttr3"
          data-testid="attr3-input"
          id="card-attr3"
          label="Attr03"
          placeholder="Attr03"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          name="cardImage"
          data-testid="image-input"
          id="card-image"
          label="Image"
          placeholder="Imagem"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <Select
          name="cardRare"
          id="rare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        />

        <Checkbox
          name="cardTrunfo"
          id="trunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
