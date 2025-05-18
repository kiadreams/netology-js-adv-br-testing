import PaymentSystems from '../PaymentSystems';


test.each([
  ['VISA', '4024007194942453', PaymentSystems.types.VISA],
  ['MasterCard', '5445897608814597', PaymentSystems.types.MASTERCARD],
  ['American Express', '374945289319158', PaymentSystems.types.AMEX],
  ['JCB', '3566002020360505', PaymentSystems.types.JCB],
  ['Diners Club', '36227204665504', PaymentSystems.types.DINERS],
  ['Discover', '6011111111111117', PaymentSystems.types.DISCOVER],
  ['Discover', '6441279338705241', PaymentSystems.types.DISCOVER],
  ['Mir', '2200462000000000', PaymentSystems.types.MIR],
  ['Mir', '1900462000000000', undefined],
])(
  'Checking the payment system identification function: this card is %s',
  (cardName, cardNumber, expected) => {
    const result = new PaymentSystems().typePaymentSystem(cardNumber);
    expect(result).toBe(expected)
  });
