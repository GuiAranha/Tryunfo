import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.saveButton());
  }

  saveButton() {
    const { state } = this;
    const sum = parseInt(state.cardAttr1, 10)
    + parseInt(state.cardAttr2, 10)
    + parseInt(state.cardAttr3, 10);
    const max = 90;
    const total = 210;

    if (state.cardName !== ''
    && state.cardDescription !== ''
    && state.cardImage !== ''
    && state.cardRare !== ''
    && parseInt(state.cardAttr1, 10) >= 0
    && parseInt(state.cardAttr1, 10) <= max
    && parseInt(state.cardAttr2, 10) >= 0
    && parseInt(state.cardAttr2, 10) <= max
    && parseInt(state.cardAttr3, 10) >= 0
    && parseInt(state.cardAttr3, 10) <= max
    && sum <= total) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { state } = this;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div>
          <Form
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
          />
          <Card
            cardName={ state.cardName }
            cardDescription={ state.cardDescription }
            cardAttr1={ state.cardAttr1 }
            cardAttr2={ state.cardAttr2 }
            cardAttr3={ state.cardAttr3 }
            cardImage={ state.cardImage }
            cardRare={ state.cardRare }
            cardTrunfo={ state.cardTrunfo }
            isSaveButtonDisabled={ state.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
          />
        </div>
      </>
    );
  }
}

export default App;
