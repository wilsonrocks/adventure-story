import Rule from "./rule";

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
});