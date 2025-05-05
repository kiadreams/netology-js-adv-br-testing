export class WidgetForm {
  constructor() {
    this.form = this.#createFormElement();
  }

  #createFormElement() {
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.setAttribute('novalidate', 'novalidate');
    form.append(this.#createBoxOfForm());
    return form;
  }

  #createBoxOfForm() {
    const boxOfForm = document.createElement('div');
    boxOfForm.classList.add('box-of-form');
    boxOfForm.append(this.#createInputField());
    boxOfForm.append(this.#createSubmitButton());
    return boxOfForm;
  }

  #createInputField(typeCard) {
    const inputField = document.createElement('input');
    inputField.classList.add('input-field');
    inputField.setAttribute('id', 'card_number');
    inputField.setAttribute('name', 'card_number');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('placeholder', 'Номер карты');
    return inputField;
  }

  #createSubmitButton() {
    const button = document.createElement('button');
    button.textContent = 'Проверить';
    button.classList.add('submit-button');
    return button;
  }
}
