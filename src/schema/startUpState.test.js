import { matchers } from 'jest-json-schema';
import startUpState from './startUpState';
import fullSchema from './schema';

expect.extend(matchers);

describe('Schema Examples', () => {
  it(`${startUpState.characterName} is a valid state`, () => expect(startUpState).toMatchSchema(fullSchema));
});
