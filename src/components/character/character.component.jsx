import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import { characterProperties } from '../../schema/schema';

const Character = ({ characterState }) => (
  <div className="character">
    {JSON.stringify(characterState)}
  </div>
);

Character.propTypes = {
  characterState: matchSchema(characterProperties).isRequired,
};

export default Character;
