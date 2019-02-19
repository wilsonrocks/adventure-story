import Flee from './flee';
import testRule from '../rule.testers';

describe('Flee', () => {
  it('is a class', () => {
    expect(() => new Flee()).not.toThrow();
  });
  testRule(Flee);
});
