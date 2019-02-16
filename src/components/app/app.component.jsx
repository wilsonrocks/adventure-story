import React from 'react';
import Character from '../character';
import './app.scss';

const App = () => (
  <div className="app-grid">
    <div className="logo">LOGO</div>
    <Character gameState={{}} />
    <div className="story">STORY</div>
    <div className="choices">CHOICES</div>
    <div className="stats">STATS</div>
    <div className="unknown1">UNKNOWN1</div>
    <div className="unknown2">UNKNOWN2</div>
  </div>
);

export default App;
