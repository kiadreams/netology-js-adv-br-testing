export default class CreditCard {
  constructor(cardNumber) {
    this.number = cardNumber;
    this.firstDigitOfNuber = Number(this.number.slice(0, 1));
    this.twoDigitsOfNumber = Number(this.number.slice(0, 2));
    this.threeDigitsOfNumber = Number(this.number.slice(0, 3));
    this.fourDigitsOfNumber = Number(this.number.slice(0, 4));
    this.sixDigitsOfNumber = Number(this.number.slice(0, 4));
  }

  static validateCardNumber(cardNumber) {
    if (cardNumber.length < 12 || isNaN(Number(cardNumber))) {
      return false;
    }
    let summaOfNumbers = 0;
    const payloadDigits = cardNumber.slice(0, -1);
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
      Number(cardNumber[cardNumber.length - 1])
    )
  }
}
