import React, { Component } from 'react'
import Slider from '../../components/slider/Slider'
import AnnouncementBar from '../../sections/announcement-bar/AnnouncementBar'


type Props = {
}

type State = {
    sliderDelay: number
}

export class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
      
        this.state = {
            sliderDelay: 5000
        }
      }
    
      componentDidMount() {
        
      }
    
      componentWillUnmount() {
      }


    render() {
        return (
            <div id='homepage'>
                <AnnouncementBar delay={this.state.sliderDelay}/>
                <Slider delay={this.state.sliderDelay}/>
            </div>
        )
    }
}

export default Home