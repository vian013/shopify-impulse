import React, { Component } from 'react'
import Slider from '../../components/slider/Slider'
import AnnouncementBar from '../../sections/announcement-bar/AnnouncementBar'
import BackgroundImageText from '../../sections/background-image-text/BackgroundImageText'
import FromTheJournal from '../../sections/from-the-journal/FromTheJournal'
import LocalPickup from '../../sections/local-pickup/LocalPickup'
import PopularPicks from '../../sections/popular-picks/PopularPicks'
import PopularPicksWithData from '../../sections/popular-picks/PopularPicksWithData'
import PromoDiscount from '../../sections/promo/promo-discount/PromoDiscount'
import PromoDouble from '../../sections/promo/promo-double/PromoDouble'
import PromoSingle from '../../sections/promo/promo-single/PromoSingle'
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
                <PromoDouble />
                <ShopByCategory />
                <PromoSingle />
                <PromoDiscount />
                <PopularPicksWithData />
                <BackgroundImageText /> 
                <FromTheJournal />
                <LocalPickup />
            </div>
        )
    }
}

export default Home