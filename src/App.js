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
    isSaveButtonDisabled: true,
    // hasTrunfo: bool,
  };

  stringInputValidation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    return cardName.length
      && cardDescription.length
      && cardImage.length
      && cardRare.length;
  };

  numberInputValidation = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const maxTotalValue = 210;

    const validateCardAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxValue;
    const validateCardAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxValue;
    const validateCardAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxValue;

    const sumValues = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validateTotal = sumValues <= maxTotalValue;

    return validateCardAttr1 && validateCardAttr2 && validateCardAttr3 && validateTotal;
  };

  formValidation = () => {
    if (this.stringInputValidation() && this.numberInputValidation()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = ({ target }) => {
    if (target.name === 'cardTrunfo') {
      this.setState((previousState) => ({
        ...previousState,
        cardTrunfo: !previousState.cardTrunfo,
      }), this.formValidation);
    } else {
      this.setState({
        [target.name]: target.value,
      }, this.formValidation);
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
      isSaveButtonDisabled,
      // hasTrunfo,
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
