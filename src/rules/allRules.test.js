import Rule from './rule';
import allRules from './allRules';

describe('allRules', () => {
  it('is an array of rules', () => {
    expect(Array.isArray(allRules)).toBe(true);
    allRules.forEach((RuleToTest) => {
      expect(new RuleToTest()).toBeInstanceOf(Rule);
    });
  });
});
