import React from 'react';
import Character from '../character';
import Choices from '../choices';

import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

import './app.scss';

const App = ({ fullState }) => (
  <div className="app-grid">
    <div className="logo">LOGO</div>
    <Character fullState={fullState} />
    <div className="story">STORY</div>
    <Choices fullState={fullState} />
  </div>
);

App.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default App;
