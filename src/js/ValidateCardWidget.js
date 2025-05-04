export class ValidateCardWidget {
  // eslint-disable-next-line no-unused-private-class-members
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
    this.widgetTitle = this.#createWidgetTitle('Проверка номера Вашей карты');
    this.listOfCards = this.#createListOfCards();
    this.widget = this.#createValidateCardWidget();
  }

  #createValidateCardWidget() {
    const widgetBox = this.#createValidateCardBox();
    widgetBox.append(this.widgetTitle);
    widgetBox.append(this.listOfCards);
    return widgetBox;
  }

  #createValidateCardBox() {
    const widgetBox = document.createElement('div');
    widgetBox.classList.add('validate-card-widget');
    return widgetBox;
  }

  #createWidgetTitle(text) {
    const widgetTitle = document.createElement('h3');
    widgetTitle.textContent = text;
    return widgetTitle;
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
