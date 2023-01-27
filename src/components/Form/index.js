import React, { Component } from 'react';

import Input from '../Input';

export default class Form extends Component {
  state = {
    name: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    image: '',
  };

  handleChange = ({ target }) => {
    this.setState(() => ({
      [target.name]: target.value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, description, attr1, attr2, attr3, image } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          name="name"
          data-testid="name-input"
          id="input-name"
          label="Nome"
          placeholder="Nome"
          type="text"
          value={ name }
          onChange={ this.handleChange }
        />

        <Input
          name="description"
          data-testid="description-input"
          id="input-description"
          label="Description"
          placeholder="Description"
          type="textarea"
          value={ description }
          onChange={ this.handleChange }
        />

        <Input
          name="attr1"
          data-testid="attr1-input"
          id="input-attr1"
          label="Attr01"
          placeholder="Attr01"
          type="number"
          value={ attr1 }
          onChange={ this.handleChange }
        />

        <Input
          name="attr2"
          data-testid="attr2-input"
          id="input-attr2"
          label="Attr02"
          placeholder="Attr02"
          type="number"
          value={ attr2 }
          onChange={ this.handleChange }
        />

        <Input
          name="attr3"
          data-testid="attr3-input"
          id="input-attr3"
          label="Attr03"
          placeholder="Attr03"
          type="number"
          value={ attr3 }
          onChange={ this.handleChange }
        />

        <Input
          name="image"
          data-testid="image-input"
          id="input-image"
          label="Image"
          placeholder="Imagem"
          type="text"
          value={ image }
          onChange={ this.handleChange }
        />

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
