import React from 'react';
import AppComponent from './app.component';
import startUpState from '../../schema/startUpState';


class App extends React.Component {
  state = {
    fullState: startUpState,
  }

  render() {
    const { fullState } = this.state;
    return (
      <AppComponent
        fullState={fullState}
      />
    );
  }
}

export default App;
