import React from 'react';
import PropTypes from 'prop-types';

import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';
import validRules from '../../rules/validRules';

const Choices = ({ fullState, setGameState }) => (
  <div className="choices">
    {validRules(fullState).map((Rule, index) => {
      const rule = new Rule();
      return (
        <button
          key={index}
          type="button"
          onClick={() => setGameState({ fullState: rule.outcome(fullState) })}
        >
          {rule.description(fullState)}
        </button>
      );
    })}
  </div>
);

Choices.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default Choices;
