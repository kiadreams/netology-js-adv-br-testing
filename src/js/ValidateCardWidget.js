import ListOfCards from './ListOfCards';
import WidgetForm from './WidgetForm';


export default class ValidateCardWidget {

  constructor() {
    this.listOfCards = new ListOfCards();
    this.widgetForm = new WidgetForm();

    this.checkCardNumber = this.checkCardNumber.bind(this);
    this.checkTypeOfCard = this.checkTypeOfCard.bind(this);

    this.widgetForm.inputField.addEventListener('input', this.checkTypeOfCard);
    this.widgetForm.form.addEventListener('submit', this.checkCardNumber);
  }

  checkCardNumber(e) {
    e.preventDefault();
    console.log(e, this.widgetForm.inputField.value);
  }

  checkTypeOfCard(e) {
    e.preventDefault();
    if (this._inputTimeout) {
      clearTimeout(this._inputTimeout);
    }
    this._inputTimeout = setTimeout(() => {
      this.listOfCards.disableCards();
      this.widgetForm.setCardNumber();
      if (this.widgetForm.isCardCorrect()) {
        this.listOfCards.showCard(this.widgetForm.cardType);
      } else {
        this.widgetForm.clear();
      }
    }, 300);
  }
}
