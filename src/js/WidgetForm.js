import CreditCard from './CreditCard';
import PaymentSystems from './PaymentSystems';


export default class WidgetForm {
  constructor() {
    this.card = new CreditCard(new PaymentSystems());
    this.form = this.#createFormBox();
    this.inputField = this.#createInputField();
    this.#fillUpForm();
  }

  #fillUpForm() {
    const submitButton = this.#createSubmitButton();
    this.form.append(this.inputField, submitButton);
  }

  #createFormBox() {
    const formBox = document.createElement('form');
    formBox.id = 'form';
    formBox.noValidate = 'novalidate';
    formBox.classList.add('box-of-form');
    return formBox;
  }

  #createInputField() {
    const inputField = document.createElement('input');
    inputField.id = 'card_number';
    inputField.type = 'text';
    inputField.name = 'card_number';
    inputField.placeholder = 'номер карты';
    inputField.classList.add('input-field');
    return inputField;
  }

  #createSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.type = 'submit';
    submitButton.textContent = 'Проверить номер карты';
    submitButton.classList.add('submit-button');
    return submitButton;
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
    return this.card.paymentType;
  }

  validateCard() {
    return this.card.validateCardNumber();
  }
}
