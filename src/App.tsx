import React, { Component } from 'react';
import Header from './layout/header/Header';
import Popup from './components/popup/Popup';
import AppRoutes from './routes/AppRoutes';
import Footer from './layout/footer/Footer';
import {QueryClient, QueryClientProvider} from 'react-query' 
import {ReactQueryDevtools} from "react-query/devtools"

export const BASE_URL = process.env.REACT_APP_BASE_URL

type Props = {
}

type State = {
}

const queryClient = new QueryClient()

class App extends Component<Props, State> {
  render() {
    
    return (
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Header />
          <AppRoutes />
          <Footer />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        </QueryClientProvider>
      </div>
    );
  }
}

export default App;