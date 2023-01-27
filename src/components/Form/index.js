import React, { Component } from 'react';

import Input from '../Input';

export default class Form extends Component {
  state = {
    inputName: '',
    inputEmail: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { inputName, inputEmail } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          data-testid="name-input"
          id="input-name"
          labeltext="Nome"
          placeholder="Nome"
          type="text"
          value={ inputName }
          onChange={ ({ target }) => this.setState({ inputName: target.value }) }
        />

        <Input
          data-testid="email-input"
          id="input-email"
          labeltext="Email"
          placeholder="Email"
          type="text"
          value={ inputEmail }
          onChange={ ({ target }) => this.setState({ inputEmail: target.value }) }
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
