import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/popup/Popup';
import AppRoutes from './routes/AppRoutes';

type Props = {
}

type State = {
}

class App extends Component<Props, State> {
  render() {
    
    return (
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    );
  }
}

export default App;