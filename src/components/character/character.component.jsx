import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import { characterSchema } from '../../schema/schema';

const Character = ({
  characterState: {
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
  characterState: matchSchema(characterSchema).isRequired,
};

export default Character;
