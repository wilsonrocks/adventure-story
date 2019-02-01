import Rule from "./rule";
import { stateSchema } from '../schemas';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

const testGameState = {
  game: {
    character: {
      name: 'Brad',
      inventory: [],
    },
    location: {
      foe: {},
      exits: [],
      items: [],
    },
  },
  meta: {
    gameStatus: 'inProgress',
  },
};

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
      expect(typeof isAvailable(testGameState)).toBe('boolean');
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
      const output = description(testGameState);
      expect(output).toBeInstanceOf(Array);
      output.forEach(x => expect(x).toBeInstanceOf(String));
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
      expect(outcome(testGameState)).toMatchSchema(stateSchema);
    });
  });
});