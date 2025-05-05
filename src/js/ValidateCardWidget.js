import { ListOfCards } from './ListOfCards';
import { WidgetForm } from './WidgetForm';


export class ValidateCardWidget {

  constructor() {
    this.widgetTitle = this.#createWidgetTitle('Проверка номера Вашей карты');
    this.listOfCards = new ListOfCards().listOfCards;
    this.form = new WidgetForm().form;
    this.widget = this.#createValidateCardWidget();
  }

  #createValidateCardWidget() {
    const widgetBox = this.#createValidateCardBox();
    widgetBox.append(this.widgetTitle);
    widgetBox.append(this.listOfCards);
    widgetBox.append(this.form);
    return widgetBox;
  }

  #createValidateCardBox() {
    const widgetBox = document.createElement('div');
    widgetBox.classList.add('validate-card-widget');
    return widgetBox;
  }

  #createWidgetTitle(text) {
    const widgetTitle = document.createElement('h3');
    widgetTitle.textContent = text;
    return widgetTitle;
  }
}
