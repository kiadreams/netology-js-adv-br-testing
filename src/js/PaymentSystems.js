export default class PaymentSystems {
  static types = [
    'visa',
    'mastercard',
    'amex',
    'discover',
    'jcb',
    'diners',
    'mir'
  ];

  typePaymentSystem(card) {
    if (this.#isVisaCard(card)) {
      return 'visa';
    } else if (this.#isMastercard(card)) {
      return 'mastercard';
    } else if (this.#isAmexCard(card)) {
      return 'amex';
    } else if (this.#isDiscoverCard(card)) {
      return 'discover';
    } else if (this.#isJsbCard(card)) {
      return 'jcb';
    } else if (this.#isDinersCard(card)) {
      return 'diners';
    } else if (this.#isMirCard(card)) {
      return 'mir';
    } else {
      return undefined;
    }
  }

  #isVisaCard(card) {
    return card.firstDigitOfNuber === 4;
  }

  #isMastercard(card) {
    if (this.isItInRange(51, 55, card.twoDigitsOfNumber)) {
      return true;
    } else {
      return this.isItInRange(222100, 272099, card.sixDigitsOfNumber);
    }
  }

  #isAmexCard(card) {
    return [34, 37].includes(card.twoDigitsOfNumber);
  }

  #isDiscoverCard(card) {
    if (card.twoDigitsOfNumber === 65 || card.fourDigitsOfNumber === 6011) {
      return true;
    } else if (this.isItInRange(644, 649, card.threeDigitsOfNumber)) {
      return true;
    } else {
      return this.isItInRange(622126, 622925, card.sixDigitsOfNumber)
    }
  }

  #isJsbCard(card) {
    for (let i = 3528; i < 3589; i++) {
      if (i === card.fourDigitsOfNumber) {
        return true;
      }
    }
    return false;
  }

  #isDinersCard(card) {
    if ([36, 54].includes(card.twoDigitsOfNumber)) {
      return true;
    } else {
      return this.isItInRange(300, 305, card.threeDigitsOfNumber);
    }
  }

  #isMirCard(card) {
    return this.isItInRange(2200, 2204, card.fourDigitsOfNumber);
  }

  isItInRange(start, end, number) {
    for (let i = start; i < end + 1; i++) {
      if (i === number) {
        return true;
      }
    }
    return false;
  }
}
