export default class ListOfCards {
  #typeCards;

  constructor(boxOfCards, typeCards) {
    this.#typeCards = typeCards;
    this.cards = boxOfCards;
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
}
