import PaymentSystems from './PaymentSystems'

export default class ListOfCards {
  constructor() {
    this.cards = this.#createCardBox()
    this.#fillUpCards()
  }

  #fillUpCards() {
    const typeCards = Object.values(PaymentSystems.types)
    typeCards.forEach((typeCard) => {
      this.cards.append(this.#createCard(typeCard))
    })
  }

  #createCardBox() {
    const cardbox = document.createElement('ul')
    cardbox.classList.add('cards')
    return cardbox
  }

  #createCard(typeCard) {
    const cardBox = document.createElement('li')
    const card = document.createElement('span')
    card.classList.add('card', typeCard, 'card-disabled')
    card.textContent = typeCard
    card.setAttribute('title', typeCard)
    cardBox.append(card)
    return cardBox
  }

  showCardType(cardType) {
    if (typeof cardType !== 'undefined') {
      const card = this.cards.querySelector(`.${cardType}`)
      card.classList.remove('card-disabled')
    }
  }

  disableCards() {
    this.cards.querySelectorAll('.card').forEach((card) => {
      card.classList.add('card-disabled')
    })
  }
}
