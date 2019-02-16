import { matchers } from 'jest-json-schema';
import testStates from './examples';
import fullSchema from './schema';

expect.extend(matchers);

describe('Schema Examples', () => {
  testStates.forEach((testState) => {
    it(`${testState.characterName} is a valid state`, () => expect(testState).toMatchSchema(fullSchema));
  });
});
