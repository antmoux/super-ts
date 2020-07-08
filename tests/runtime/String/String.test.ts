import String, { StringΔ$ } from '@runtime/types/String/String';
import { isGreaterThan } from '@runtime/types/String/checks/isGreaterThan';
import { isSuccessOf } from '@algebraic/types/Validation/Functions';

describe ('String Type', () => {
  it ('Symbol identifier exists', () => {
    expect (String.type).toBe (StringΔ$);
  });

  it ('When string is check, we expected to pass', () => {
    const payload = 'this is a string';
    const isString = String.check (payload);
    expect (isSuccessOf (isString, payload)).toBeTruthy ();
  });

  it ('When something that is not a string is checked, we expected to fail', () => {
    const payload = true;
    const isString = String.check (payload);
    expect (isSuccessOf (isString, payload)).toBeFalsy ();
  });

  it ('When string is checked with custom check, we expected to pass', () => {
    const payload = 'this is a string';
    const isString = String.checkWith ([isGreaterThan (1)]).check (payload);
    expect (isSuccessOf (isString, payload)).toBeTruthy ();
  });

  it ('When string is checked with custom check that does not respect the rules, we expected to fail', () => {
    const payload = 'this is a string';
    const isString = String.checkWith ([isGreaterThan (100)]).check (payload);
    expect (isSuccessOf (isString, payload)).toBeFalsy ();
  });
});
