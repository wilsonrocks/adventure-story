import Slap from './slap';
import testRule from '../rule.testers';

describe('Slap', () => {
  it('is a class', () => {
    expect(() => new Slap()).not.toThrow();
  });
  testRule(Slap);
});