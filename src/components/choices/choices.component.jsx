import React from 'react';
import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';
import validRules from '../../rules/validRules';

const Choices = ({ fullState }) => (
  <div className="choices">
    <h2>Your choices</h2>
    <ol>
      {validRules(fullState).map((Rule, index) => {
        const rule = new Rule();
        return <li key={index}>{rule.description(fullState)}</li>;
      })}
    </ol>
  </div>
);

Choices.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default Choices;
