export default class WidgetForm {
  constructor(elementOfForm) {
    this.form = elementOfForm;
    this.submitButton = this.form.querySelector('#submit-button');
    this.inputField = this.form.querySelector('#card_number');
  }

  clear() {
    this.inputField.value = '';
  }
}
