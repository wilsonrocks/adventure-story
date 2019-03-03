import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import matchSchema from '../../schema/schemaPropType';
import { characterSchema } from '../../schema/schema';

const Character = ({
  characterState: {
    characterName,
    characterInventory,
    characterRace,
  },
  hide,
}) => (
  <div className={classnames('character', { hide })}>
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
  hide: PropTypes.bool,
};

Character.defaultProps = {
  hide: false,
};

export default Character;
