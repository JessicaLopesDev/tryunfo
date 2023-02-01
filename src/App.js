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
    hasTrunfo: false,
    array: [],
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
      this.setState((previousState) => ({
        ...previousState,
        [target.name]: target.value,
      }), this.formValidation);
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.setState((prevState) => ({
      hasTrunfo: cardTrunfo,
      array: [...prevState.array, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    }), this.formValidation);
  };

  removeCard = (index) => {
    const { array } = this.state;
    const findSuperTrunfo = array.some((card, i) => i === index && card.cardTrunfo);

    const filterRemoveCard = array.filter((_card, i) => i !== index);

    this.setState({
      array: filterRemoveCard,
      hasTrunfo: !findSuperTrunfo,
    });
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
      hasTrunfo,
      array,
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          key={ cardName }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ String(cardAttr1) }
          cardAttr2={ String(cardAttr2) }
          cardAttr3={ String(cardAttr3) }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {
          array.map((card, index) => (
            <>
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ String(card.cardAttr1) }
                cardAttr2={ String(card.cardAttr2) }
                cardAttr3={ String(card.cardAttr3) }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />

              <button
                key={ index }
                data-testid="delete-button"
                onClick={ () => this.removeCard(index) }
              >
                Excluir
              </button>
            </>
          ))
        }
      </>
    );
  }
}

export default App;
