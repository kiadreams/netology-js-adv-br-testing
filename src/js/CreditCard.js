export default class CreditCard {
  static instance;
  #number;

  constructor(cardNumber = '') {
    if (!CreditCard.instance) {
      CreditCard.instance = this;
      this.#number = cardNumber;
      this.getCardDetails();
    }
    return CreditCard.instance;
  }

  set number(number) {
    this.#number = number;
    this.getCardDetails();
  }

  get number() {
    return this.#number;
  }

  getCardDetails() {
    this.firstDigitOfNuber = Number(this.#number.slice(0, 1));
    this.twoDigitsOfNumber = Number(this.#number.slice(0, 2));
    this.threeDigitsOfNumber = Number(this.#number.slice(0, 3));
    this.fourDigitsOfNumber = Number(this.#number.slice(0, 4));
    this.sixDigitsOfNumber = Number(this.#number.slice(0, 4));
  }

  validateCardNumber() {
    if (this.number.length < 12) {
      return false;
    }
    let summaOfNumbers = 0;
    const payloadDigits = this.number.slice(0, -1);
    const parity = payloadDigits.length % 2;
    [...payloadDigits].forEach((numValue, i) => {
      const num = Number(numValue);
      if (i % 2 === parity) {
        summaOfNumbers += num;
      } else {
        summaOfNumbers += num > 4 ? num * 2 - 9 : num * 2;
      }
    });
    return (
      (10 - (summaOfNumbers % 10)) % 10 ===
      Number(this.number[this.number.length - 1])
    )
  }
}
