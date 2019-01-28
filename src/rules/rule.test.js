import Rule from "./rule";
import { gameStateSchema } from '../schemas';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

describe('Rule', () => {
  it('is a class', () => {
    expect(() => new Rule()).not.toThrow();
  });
  describe('.isAvailable()', () => {
    it('is a method', () => {
      const { isAvailable } = new Rule();
      expect(isAvailable).toBeDefined();
      expect(isAvailable).toBeInstanceOf(Function);
    });
    it('returns a boolean', () => {
      const { isAvailable } = new Rule();
      expect(typeof isAvailable()).toBe('boolean');
    });
  });
  describe('.description()', () => {
    it('is a method', () => {
      const { description } = new Rule();
      expect(description).toBeDefined();
      expect(description).toBeInstanceOf(Function);
    });
    it('returns an array of strings', () => {
      const { description } = new Rule();
      expect(description({})).toBeInstanceOf(Array);
      description({}).forEach(x => expect(x).toBeInstanceOf(String));
    });
  });
  describe('.outcome()', () => {
    it('is a method', () => {
      const { outcome } = new Rule();
      expect(outcome).toBeDefined();
      expect(outcome).toBeInstanceOf(Function);
    });
    it('returns a game state object', () => {
      const { outcome } = new Rule();
      expect(outcome({})).toBeInstanceOf(Object);
      expect(outcome({})).toMatchSchema(gameStateSchema);
    });
  });
});