import React from 'react';
import PropTypes from 'prop-types';
import Character from '../character';
import Choices from '../choices';
import Story from '../story';

import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

import './app.scss';

const App = ({
  fullState,
  setGameState,
  toggleShowing,
  showingCharacter,
}) => (
  <div className="app-grid">
    <button
      type="button"
      onClick={toggleShowing}
      className="toggle-stats"
    >
      {showingCharacter ? 'character' : 'story' }
    </button>
    <Character characterState={fullState} hide={!showingCharacter} />
    <Story fullState={fullState} hide={showingCharacter} />
    <Choices fullState={fullState} setGameState={setGameState} />
  </div>
);

App.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
  setGameState: PropTypes.func.isRequired,
  toggleShowing: PropTypes.func.isRequired,
  showingCharacter: PropTypes.bool.isRequired,
};

export default App;
