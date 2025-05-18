import ListOfCards from './ListOfCards';
import WidgetForm from './WidgetForm';


export default class ValidateCardWidget {
  constructor(parentElement) {
    this.cardList = new ListOfCards();
    this.widgetForm = new WidgetForm();
    this.#fillUpParentElement(parentElement);

    this.checkCardNumber = this.checkCardNumber.bind(this);
    this.checkTypeOfCard = this.checkTypeOfCard.bind(this);

    this.widgetForm.inputField.addEventListener('input', this.checkTypeOfCard);
    this.widgetForm.form.addEventListener('submit', this.checkCardNumber);
  }

  #fillUpParentElement(parentElement) {
    const widgetBox = this.#createWidgetBox();
    widgetBox.append(this.cardList.cards);
    widgetBox.append(this.widgetForm.form);
    parentElement.append(widgetBox);
  }

  #createWidgetBox() {
    const widgetBox = document.createElement('div');
    widgetBox.classList.add('validate-card-widget');
    const widgetHeader = document.createElement('h3');
    widgetHeader.textContent = 'Проверка номера карты';
    widgetBox.append(widgetHeader);
    return widgetBox;
  }

  checkCardNumber(e) {
    e.preventDefault();
    if (this.widgetForm.validateCard()) {
      alert('Номер карты корректный!');
    } else {
      alert('Указан некоректный номер карты!');
    }
  }

  checkTypeOfCard(e) {
    e.preventDefault();
    if (this._inputTimeout) {
      clearTimeout(this._inputTimeout);
    }
    this._inputTimeout = setTimeout(() => {
      this.cardList.disableCards();
      this.widgetForm.setCardNumber();
      if (this.widgetForm.card.number) {
        this.cardList.showCardType(this.widgetForm.cardType);
      }
    }, 200);
  }
}
