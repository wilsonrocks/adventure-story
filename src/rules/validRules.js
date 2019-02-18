import Slap from './slap/slap';

const allRules = [
  Slap,
];

const validRules = fullState => allRules.filter(rule => rule.isAvailable(fullState));

export default validRules;
