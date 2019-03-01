import React from 'react';
import PropTypes from 'prop-types';

import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';
import validRules from '../../rules/validRules';

const Choices = ({ fullState, setGameState }) => (
  <div className="choices">
    <h2>Your choices</h2>
    <ol>
      {validRules(fullState).map((Rule, index) => {
        const rule = new Rule();
        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => setGameState({ fullState: rule.outcome(fullState) })}
            >
              {rule.description(fullState)}
            </button>
          </li>
        );
      })}
    </ol>
  </div>
);

Choices.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default Choices;
