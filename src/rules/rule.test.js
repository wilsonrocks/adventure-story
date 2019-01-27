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
  });
});