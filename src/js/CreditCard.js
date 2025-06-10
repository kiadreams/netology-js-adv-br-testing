export default class CreditCard {
  #paymentSystems
  #number

  constructor(paymentSystems) {
    this.#paymentSystems = paymentSystems
    this.#number = ''
    this.paymentType = undefined
  }

  set number(value) {
    this.#number = value
    this.paymentType = this.#paymentSystems.typePaymentSystem(value)
  }

  get number() {
    return this.#number
  }

  validateCardNumber() {
    if (this.number.length < 12 || typeof this.paymentType === 'undefined') {
      return false
    }
    let summaOfNumbers = 0
    const payloadDigits = this.number.slice(0, -1)
    const parity = payloadDigits.length % 2
    ;[...payloadDigits].forEach((numValue, i) => {
      const num = Number(numValue)
      if (i % 2 === parity) {
        summaOfNumbers += num
      } else {
        summaOfNumbers += num > 4 ? num * 2 - 9 : num * 2
      }
    })
    return (
      (10 - (summaOfNumbers % 10)) % 10 ===
      Number(this.number[this.number.length - 1])
    )
  }
}
