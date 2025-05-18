import CreditCard from '../CreditCard';
import PaymentSystems from '../PaymentSystems';


test.each([
  ['too short', '40240071', false],
  ['correct', '4539325346346672', true],
  ['incorrect', '4539470555362266841', false],
])('Check card number: number is %s', (cardName, cardNumber, expected) => {
  const card = new CreditCard(new PaymentSystems());
  card.number = cardNumber;
  expect(card.validateCardNumber()).toBe(expected)
});
