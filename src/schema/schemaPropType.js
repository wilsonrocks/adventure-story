import Ajv from 'ajv';

function matchSchema(schema) {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const errorString = validate.errors
    .map(error => error.message)
    .join('\n');
  return (props, propName, componentName) => {
    if (!validate(props[propName])) {
      return null;
    }
    return new Error(
      `prop ${propName} of component ${componentName} has the following problems:\n${errorString}`,
    );
  };
}

export default matchSchema;
