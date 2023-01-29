import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: bool,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    if (target.name === 'cardTrunfo') {
      this.setState((previousState) => ({
        ...previousState,
        cardTrunfo: !previousState.cardTrunfo,
      }));
    } else {
      this.setState((previousState) => ({
        ...previousState,
        [target.name]: target.value,
      }));
    }
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
      // hasTrunfo,
      isSaveButtonDisabled,
      // onInputChange,
      // onSaveButtonClick,
    } = this.state;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ String(cardAttr1) }
          cardAttr2={ String(cardAttr2) }
          cardAttr3={ String(cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          // onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ String(cardAttr1) }
          cardAttr2={ String(cardAttr2) }
          cardAttr3={ String(cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
