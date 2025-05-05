export class ListOfCards {
  #typeCards;

  constructor() {
    this.#typeCards = [
      'visa',
      'mastercard',
      'amex',
      'discover',
      'jcb',
      'diners',
      'mir',
    ];
    this.listOfCards = this.#createListOfCards();
  }

  #createListOfCards() {
    const cards = document.createElement('ul');
    cards.classList.add('cards');
    this.#typeCards.forEach((typeCard) => {
      cards.append(this.#createCard(typeCard));
    });
    return cards;
  }

  #createCard(typeCard) {
    const cardBox = document.createElement('li');
    const card = document.createElement('span');
    card.classList.add('card', typeCard);
    card.textContent = typeCard;
    card.setAttribute('title', typeCard);
    cardBox.append(card);
    return cardBox;
  }
}
