import React from 'react';
import deepmerge from 'deepmerge';

import AppComponent from './app.component';
import startUpState from '../../schema/startUpState';


class App extends React.Component {
  state = {
    fullState: startUpState,
    ui: {
      showingStats: false,
    },
  }

  toggleShowing = () => {
    const { ui: { showingStats } } = this.state;
    const newState = deepmerge(this.state, { ui: { showingStats: !showingStats } });
    return this.setState(newState);
  }

  render() {
    const { fullState, ui: { showingStats } } = this.state;
    return (
      <AppComponent
        fullState={fullState}
        setGameState={(...args) => this.setState(...args)}
        showingStats={showingStats}
        toggleShowing={this.toggleShowing}
      />
    );
  }
}

export default App;
