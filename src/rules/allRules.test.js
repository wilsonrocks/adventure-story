import Rule from './rule';
import allRules from './allRules';

describe('allRules', () => {
  it('is an array of rules', () => {
    expect(Array.isArray(allRules)).toBe(true);
    allRules.forEach((RuleToTest) => {
      const rule = new RuleToTest();
      expect(rule).toBeInstanceOf(Rule);
      expect(typeof rule.isAvailable).toBe('function');
    });
  });
});
