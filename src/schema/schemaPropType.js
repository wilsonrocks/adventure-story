import Ajv from 'ajv';

function matchSchema(schema) {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const schemaChecker = (props, propName, componentName) => {
    if (!validate(props[propName])) {
      const errorString = validate.errors
        .map(error => error.message)
        .join('\n');
      return new Error(
        `prop ${propName} of component ${componentName} has the following problems:\n${errorString}`,
      );
    }
    return undefined;
  };
  schemaChecker.isRequired = (props, propName, componentName) => {
    const prop = props[propName];
    if (prop === undefined) return new Error(`Prop ${propName} was missing on component ${componentName} when it was marked as required.`);
    return schemaChecker(props, propName, componentName);
  };
  return schemaChecker;
}

export default matchSchema;
