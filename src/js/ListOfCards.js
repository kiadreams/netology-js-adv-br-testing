import PaymentSystems from './PaymentSystems';


export default class ListOfCards {
  #typeCards;

  constructor() {
    this.#typeCards = PaymentSystems.types;
    this.cards = document.querySelector('.cards');;
    this.#createCards();
  }

  #createCards() {
    this.#typeCards.forEach((typeCard) => {
      this.cards.append(this.#createCard(typeCard));
    });
  }

  #createCard(typeCard) {
    const cardBox = document.createElement('li');
    const card = document.createElement('span');
    card.classList.add('card', typeCard, 'card-disabled');
    card.textContent = typeCard;
    card.setAttribute('title', typeCard);
    cardBox.append(card);
    return cardBox;
  }

  showCardType(cardType) {
    if (cardType) {
      const card = this.cards.querySelector(`.${cardType}`);
      card.classList.remove('card-disabled');
    }
  }

  disableCards() {
    this.cards.querySelectorAll('.card').forEach((card) => {
      card.classList.add('card-disabled');
    });
  }
}
