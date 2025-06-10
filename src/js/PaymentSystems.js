export default class PaymentSystems {
  static types = {
    VISA: 'visa',
    MASTERCARD: 'mastercard',
    AMEX: 'amex',
    DISCOVER: 'discover',
    JCB: 'jcb',
    DINERS: 'diners',
    MIR: 'mir',
  }
  #firstDigitOfNumber
  #twoDigitsOfNumber
  #threeDigitsOfNumber
  #fourDigitsOfNumber
  #sixDigitsOfNumber

  typePaymentSystem(cardNumber) {
    this.#getCardDetails(cardNumber)
    return this.#cardPaymentSystem
  }

  get #cardPaymentSystem() {
    if (this.#isVisaCard()) {
      return PaymentSystems.types.VISA
    } else if (this.#isMastercard()) {
      return PaymentSystems.types.MASTERCARD
    } else if (this.#isAmexCard()) {
      return PaymentSystems.types.AMEX
    } else if (this.#isDiscoverCard()) {
      return PaymentSystems.types.DISCOVER
    } else if (this.#isJsbCard()) {
      return PaymentSystems.types.JCB
    } else if (this.#isDinersCard()) {
      return PaymentSystems.types.DINERS
    } else if (this.#isMirCard()) {
      return PaymentSystems.types.MIR
    } else {
      return undefined
    }
  }

  #getCardDetails(number) {
    this.#firstDigitOfNumber = Number(number.slice(0, 1))
    this.#twoDigitsOfNumber = Number(number.slice(0, 2))
    this.#threeDigitsOfNumber = Number(number.slice(0, 3))
    this.#fourDigitsOfNumber = Number(number.slice(0, 4))
    this.#sixDigitsOfNumber = Number(number.slice(0, 4))
  }

  #isVisaCard() {
    return this.#firstDigitOfNumber === 4
  }

  #isMastercard() {
    if (this.#isItInRange(51, 55, this.#twoDigitsOfNumber)) {
      return true
    } else {
      return this.#isItInRange(222100, 272099, this.#sixDigitsOfNumber)
    }
  }

  #isAmexCard() {
    return [34, 37].includes(this.#twoDigitsOfNumber)
  }

  #isDiscoverCard() {
    if (this.#twoDigitsOfNumber === 65 || this.#fourDigitsOfNumber === 6011) {
      return true
    } else if (this.#isItInRange(644, 649, this.#threeDigitsOfNumber)) {
      return true
    } else {
      return this.#isItInRange(622126, 622925, this.#sixDigitsOfNumber)
    }
  }

  #isJsbCard() {
    for (let i = 3528; i < 3589; i++) {
      if (i === this.#fourDigitsOfNumber) {
        return true
      }
    }
    return false
  }

  #isDinersCard() {
    if ([36, 54].includes(this.#twoDigitsOfNumber)) {
      return true
    } else {
      return this.#isItInRange(300, 305, this.#threeDigitsOfNumber)
    }
  }

  #isMirCard() {
    return this.#isItInRange(2200, 2204, this.#fourDigitsOfNumber)
  }

  #isItInRange(start, end, number) {
    for (let i = start; i < end + 1; i++) {
      if (i === number) {
        return true
      }
    }
    return false
  }
}
