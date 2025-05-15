import CreditCard from './CreditCard';
import PaymentSystems from './PaymentSystems';


export default class WidgetForm {
  constructor() {
    this.card = new CreditCard();
    this.paymentSystems = new PaymentSystems();
    this.form = document.querySelector('#form');
    this.inputField = this.form.querySelector('#card_number');
  }

  clear() {
    this.inputField.value = '';
    this.card.number = '';
  }

  setCardNumber() {
    const newCardNumber = this.inputField.value;
    if (!isNaN(newCardNumber)) {
      this.card.number = newCardNumber;
    } else {
      alert('Номер карты должен состоять только из цифр');
      this.inputField.value = this.card.number;
    }
  }

  get cardType() {
    return this.paymentSystems.typePaymentSystem(this.card);
  }

  validateCard() {
    return this.card.validateCardNumber();
  }
}
