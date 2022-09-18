import React, { Component } from 'react';
import Header from './layout/header/Header';
import Popup from './components/popup/Popup';
import AppRoutes from './routes/AppRoutes';
import Footer from './layout/footer/Footer';

export const BASE_URL = process.env.REACT_APP_BASE_URL

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
        <Footer />
      </div>
    );
  }
}

export default App;