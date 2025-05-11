import ListOfCards from './ListOfCards';
import WidgetForm from './WidgetForm';
import PaymentSystems from './PaymentSystems';
import CreditCard from './CreditCard';


export default class ValidateCardWidget {

  constructor() {
    this.widget = document.querySelector('.validate-card-widget');
    this.paymentSystems = new PaymentSystems();
    this.listOfCards = new ListOfCards(
      this.widget.querySelector('.cards'),
      this.paymentSystems.types,
    );
    this.widgetForm = new WidgetForm(this.widget.querySelector('#form'));

    this.checkCardNumber = this.checkCardNumber.bind(this);
    this.checkTypeOfCard = this.checkTypeOfCard.bind(this);

    this.widgetForm.form.addEventListener('submit', this.checkCardNumber);
    this.widgetForm.inputField.addEventListener('input', this.checkTypeOfCard);
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
      const card = new CreditCard(this.widgetForm.inputField.value);
      console.log(this.paymentSystems.typePaymentSystem(card));
    }, 300);
  }
}
