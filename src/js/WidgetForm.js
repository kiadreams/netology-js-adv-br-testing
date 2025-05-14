import CreditCard from './CreditCard';
import PaymentSystems from './PaymentSystems';


export default class WidgetForm {
  constructor() {
    this.card = new CreditCard();
    this.paymentSystems = new PaymentSystems();
    this.form = document.querySelector('#form');
    this.submitButton = this.form.querySelector('#submit-button');
    this.inputField = this.form.querySelector('#card_number');
  }

  clear() {
    console.log(this.card.number);
    this.inputField.value = '';
    this.card.number = '';
  }

  setCardNumber() {
    this.card.number = this.inputField.value;
  }

  isCardCorrect() {
    return this.card.isCardNumberCorrect();
  }

  get cardType() {
    return this.paymentSystems.typePaymentSystem(this.card);
  }
}
