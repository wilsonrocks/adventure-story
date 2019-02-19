import allRules from './allRules';

const validRules = fullState => allRules.filter(Rule => new Rule().isAvailable(fullState));

export default validRules;
