import { ValidateCardWidget } from './ValidateCardWidget';

const parentElement = document.querySelector('body');
const validateCardWidget = new ValidateCardWidget();
parentElement.append(validateCardWidget.widget);
