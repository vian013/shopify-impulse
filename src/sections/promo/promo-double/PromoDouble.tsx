import React from 'react'
import ImageWithText from '../../../components/image-with-text/ImageWithText'
import ShopButton from '../../../components/shop-btn/ShopButton'
import Promo from '../Promo'
import "./PromoDouble.scss"

function PromoDouble() {
  return (
    <Promo>
        <div className="promo-double">
            <ImageWithText
                frameBorder
                imgUrl='https://cdn.shopify.com/s/files/1/0027/7692/4218/files/christopher-campbell-wtZgw1nQ3FI-unsplash_1296x.jpg?v=1569856912'
                title='BEACH READY'
                subtitle='TIME TO GET'
                width='50'
            >
                <>
                <ShopButton link='/' bgColor='grey'>Shop Swim</ShopButton>
                <ShopButton link='/' bgColor='grey'>Shop All</ShopButton>
                </>
            </ImageWithText>
            <ImageWithText
                imgUrl='https://cdn.shopify.com/s/files/1/0027/7692/4218/files/gift-card-cropped_1296x.jpg?v=1585769035'
                title='Gift cards'
                description={
                <>
                    <p>Help support local business by buying a gift card.</p>
                    <p>Local pickup available!</p>
                </>
                }
                contentPosition="bottom"
                width='50'
            >
                <ShopButton link='/' bgColor='white'>Shop gift cards</ShopButton>
            </ImageWithText>
        </div>
    </Promo>
  )
}

export default PromoDouble