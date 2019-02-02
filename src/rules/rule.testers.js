import { stateSchema } from '../schema/schemas';
import { matchers } from 'jest-json-schema';
import testStates from '../schema/examples';
expect.extend(matchers);



const testRule = rule => {
  testStates.forEach(testState => {
    describe('Rule', () => {
      it('is a class', () => {
        expect(() => new rule()).not.toThrow();
      });
      describe('.isAvailable()', () => {
        it('is a method', () => {
          const { isAvailable } = new rule();
          expect(isAvailable).toBeDefined();
          expect(isAvailable).toBeInstanceOf(Function);
        });
        it('returns a boolean', () => {
          const { isAvailable } = new rule();
          expect(typeof isAvailable(testState)).toBe('boolean');
        });
      });
      describe('.description()', () => {
        it('is a method', () => {
          const { description } = new rule();
          expect(description).toBeDefined();
          expect(description).toBeInstanceOf(Function);
        });
        it('returns an array of strings', () => {
          const { description } = new rule();
          const output = description(testState);
          expect(output).toBeInstanceOf(Array);
          output.forEach(x => expect(x).toBeInstanceOf(String));
        });
      });
      describe('.outcome()', () => {
        it('is a method', () => {
          const { outcome } = new rule();
          expect(outcome).toBeDefined();
          expect(outcome).toBeInstanceOf(Function);
        });
        it('returns a game state object', () => {
          const { outcome } = new rule();
          expect(outcome(testState)).toMatchSchema(stateSchema);
        });
      });
    });

  });
}

export default testRule;
