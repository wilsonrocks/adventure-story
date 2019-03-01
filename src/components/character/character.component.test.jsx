import React from 'react';
import ReactDOM from 'react-dom';
import Character from './character.component';
import examples from '../../schema/examples';


examples.forEach((example) => {
  it(`renders without crashing with ${example.characterName}`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Character characterState={example} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
