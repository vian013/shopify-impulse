import React, { Component } from 'react'
import Slider from '../../components/slider/Slider'
import AnnouncementBar from '../../sections/announcement-bar/AnnouncementBar'
import Promo from '../../sections/promo/Promo'
import ShopByCategory from '../../sections/shop-by-category/ShopByCategory'
import TextBanner from '../../sections/text-banner/TextBanner'

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
                <TextBanner />
                <Promo />
                <ShopByCategory />
            </div>
        )
    }
}

export default Home