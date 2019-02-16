import React from 'react';
import Character from '../character';
import matchSchema from '../../schema/schemaPropType';
import fullSchema from '../../schema/schema';

import './app.scss';

const App = ({ fullState }) => (
  <div className="app-grid">
    <div className="logo">LOGO</div>
    <Character fullState={fullState} />
    <div className="story">STORY</div>
    <div className="choices">CHOICES</div>
    <div className="stats">STATS</div>
    <div className="unknown1">UNKNOWN1</div>
    <div className="unknown2">UNKNOWN2</div>
  </div>
);

App.propTypes = {
  fullState: matchSchema(fullSchema).isRequired,
};

export default App;
