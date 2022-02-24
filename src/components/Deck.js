import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((card) => (<Card
          key={ card.name }
          cardName={ card.name }
          cardDescription={ card.description }
          cardAttr1={ card.attr1 }
          cardAttr2={ card.attr2 }
          cardAttr3={ card.attr3 }
          cardImage={ card.image }
          cardRare={ card.rare }
          cardTrunfo={ card.trunfo }
        />))}
      </div>
    );
  }
}

Deck.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      description: propTypes.string,
      attr1: propTypes.number,
      attr2: propTypes.number,
      attr3: propTypes.number,
      image: propTypes.string,
      rare: propTypes.string,
      trunfo: propTypes.bool,
    }),
  ).isRequired,
};

export default Deck;
