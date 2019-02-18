import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

const Choices = ({ fullState }) => <div>{JSON.stringify(fullState)}</div>;

Choices.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default Choices;
