import React, { Component } from 'react';
import propTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label htmlFor="nameCard">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="nameCard"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>

          <label htmlFor="description">
            Descricao
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>

          <label htmlFor="attr1">
            Attr 01
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>

          <label htmlFor="attr2">
            Attr 02
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>

          <label htmlFor="attr3">
            Attr 03
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>

          <label htmlFor="imgCard">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="imgCard"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>

          <label htmlFor="sltCard">
            Raridade
            <select
              data-testid="rare-input"
              id="sltCard"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="chkTrunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="chkTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
            />
            Super Trunfo
          </label>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
};

export default Form;
