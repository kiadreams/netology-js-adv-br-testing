/** @jest-environment jsdom */

import ValidateCardWidget from '../ValidateCardWidget'

test('validate card widget', () => {
  document.body.innerHTML = '<div class="container"></div>'

  new ValidateCardWidget(document.querySelector('.container'))
  const form = document.querySelector('form')
  const innerHTML =
    '<input id="card_number" type="text" name="card_number" placeholder="номер карты" class="input-field">' +
    '<button id="submit-button" type="submit" class="submit-button">Проверить номер карты</button>'

  expect(form.innerHTML).toEqual(innerHTML)
})
