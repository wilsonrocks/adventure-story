import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

const Character = ({
  fullState: {
    characterName,
    characterInventory,
    characterRace,
  },
}) => (
  <div className="character">
    <h2>{characterName}</h2>
    <p>
      You are an
      {' '}
      {characterRace}
      .
    </p>
    <p>
      You are carrying:
      {' '}
      {characterInventory.join(', ')}
    </p>
  </div>
);

Character.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default Character;
