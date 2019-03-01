import React from 'react';
import PropTypes from 'prop-types';
import Character from '../character';
import Choices from '../choices';
import Story from '../story';

import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

import './app.scss';

const App = ({ fullState, setGameState }) => (
  <div className="app-grid">
    <div className="logo">LOGO</div>
    <Character characterState={fullState} />
    <Story fullState={fullState} />
    <Choices fullState={fullState} setGameState={setGameState} />
  </div>
);

App.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default App;
