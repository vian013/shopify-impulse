import React, { Component } from 'react'
import Slider from '../../components/slider/Slider'


type Props = {
  
}

type State = {
}

export class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
      
        this.state = {
        }
      }
    
      componentDidMount() {
        
      }
    
      componentWillUnmount() {
      }


    render() {
        return (
            <div id='homepage'>
                <Slider delay={5000}/>
            </div>
        )
    }
}

export default Home