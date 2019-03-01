import React from 'react';
import ReactDOM from 'react-dom';
import Character from './choices.component';
import examples from '../../schema/examples';


examples.forEach((example) => {
  it(`renders without crashing with ${example.characterName}`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Character fullState={example} setGameState={jest.fn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
