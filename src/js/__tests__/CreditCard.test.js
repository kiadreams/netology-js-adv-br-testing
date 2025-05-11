import CreditCard from '../CreditCard';


test.each([
  ['VISA', '4024007100534485', true],
  ['VISA', '4539325346346672', true],
  ['VISA', '4539470555362266840', true],
  ['VISA', '4539470555362266841', false],
  ['Discover', '6011561724654954', true],
  ['Discover', '6011151014488444', true],
  ['Discover', '6011552213394431995', true],
  ['Discover', '6011552213394431993', false],
  ['MasterCard', '5101926942956627', true],
  ['MasterCard', '5479960404348159', true],
  ['MasterCard', '5199353859929781', true],
  ['MasterCard', '5199353859929783', false],
  ['JCB', '3537775613007486', true],
  ['JCB', '3538001371998926', true],
  ['JCB', '3537532341957447348', true],
  ['JCB', '3537532341957447347', false],
  ['Diners Club', '36275543917724', true],
  ['Diners Club', '36746731016404', true],
  ['Diners Club', '36757546072870', true],
  ['Diners Club', '36757546072871', false],
  ['AMEX', '346304775864670', true],
  ['AMEX', '342905459142185', true],
  ['AMEX', '345797795474514', true],
  ['AMEX', '345797795474515', false],
])(
  'check card number of %s card',
  (cardName, cardNumber, expected) => {
    const result = CreditCard.validateCardNumber(cardNumber)
    expect(result).toBe(expected)
  });
