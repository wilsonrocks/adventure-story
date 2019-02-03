import testStates from './examples';
import { stateSchema } from './schemas';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);


describe('Schema Examples', () => {
  testStates.forEach(testState => {
    it('is a valid state', () => expect(testState).toMatchSchema(stateSchema));
  });
});