import React, { Component } from 'react';

class Form extends Component {
/*   constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  } */

  /* handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  } */

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label /*  htmlFor={ nameCard } */>
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="nameCard"
            />
          </label>

          <label /* htmlFor={ description } */>
            Descricao
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
            />
          </label>

          <label /* htmlFor={ attr1 } */>
            Attr 01
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1"
            />
          </label>

          <label /* htmlFor={ attr2 } */>
            Attr 02
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2"
            />
          </label>

          <label /* htmlFor={ attr3 } */>
            Attr 03
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3"
            />
          </label>

          <label /* htmlFor={ imgCard } */>
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="imgCard"
            />
          </label>

          <label /* htmlFor={ imgCard } */>
            Raridade
            <select data-testid="rare-input" id="sltCard">
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
            />
            Super Trunfo
          </label>

          <button type="submit" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
