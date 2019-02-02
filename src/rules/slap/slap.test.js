import Slap from './slap';

describe('Slap', () => {
  it('is a class', () => {
    expect(() => new Slap()).not.toThrow();
  });
});