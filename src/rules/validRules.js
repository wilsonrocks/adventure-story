import allRules from './allRules';

const validRules = fullState => allRules.filter(rule => rule.isAvailable(fullState));

export default validRules;
