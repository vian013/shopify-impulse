import React, { Component } from 'react';
import Header from './components/header/Header';
import Popup from './components/popup/Popup';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';

type Props = {

}

type State = {
  count: number
  timeId: NodeJS.Timeout | null
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  
    this.state = {
      count: 0,
      timeId: null
    }
  }

  componentDidMount() {
    const timeId = setTimeout(() => {
      this.setState(state => ({count: state.count+1}))
    }, 5000);

    this.setState({timeId})
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeId!)
  }
  
  render() {
    
    return (
      <div className="App">
        {/* <Header /> */}
        <Slider delay={5000}/>
        <Popup />
        {/* <Products /> */}
      </div>
    );
  }
}

export default App;