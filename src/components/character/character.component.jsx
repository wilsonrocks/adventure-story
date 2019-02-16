import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

const Character = ({ fullState }) => (
  <div className="character">
    {JSON.stringify(fullState)}
  </div>
);

Character.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default Character;
