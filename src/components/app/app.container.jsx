import React from 'react';
import deepmerge from 'deepmerge';

import AppComponent from './app.component';
import startUpState from '../../schema/startUpState';


class App extends React.Component {
  state = {
    fullState: startUpState,
    ui: {
      showingCharacter: false,
    },
  }

  toggleShowing = () => {
    const { ui: { showingCharacter } } = this.state;
    const newState = deepmerge(this.state, { ui: { showingCharacter: !showingCharacter } });
    return this.setState(newState);
  }

  render() {
    const { fullState, ui: { showingCharacter } } = this.state;
    return (
      <AppComponent
        fullState={fullState}
        setGameState={(...args) => this.setState(...args)}
        showingCharacter={showingCharacter}
        toggleShowing={this.toggleShowing}
      />
    );
  }
}

export default App;
