import React from 'react'
import ImageWithText from '../../../components/image-with-text/ImageWithText'
import ShopButton from '../../../components/shop-btn/ShopButton'
import Promo from '../Promo'
import "./PromoSingle.scss"

function PromoSingle() {
  return (
    <Promo>
        <div className="promo-single">
            <ImageWithText
                imgUrl='https://cdn.shopify.com/s/files/1/0027/7692/4218/files/zeny-rosalina-Z3tc0Bfv0c4-unsplash_5d1e40d3-6b8f-4d67-aeee-76c40da81d79_1296x.jpg?v=1569860683'
                title='Fall accessories'
                subtitle='Fresh looks'
                description={
                    <>
                        <p>Get the perfect look for your fall wardrobe.</p>
                        <p>From the city to the festival to campus.</p>
                    </>
                }
                width='100'
                contentPosition='right'
            >
                <>
                    <ShopButton link='/' bgColor='crimson'>Shop bags</ShopButton>
                    <ShopButton link='/' bgColor='crimson'>Shop all</ShopButton>
                </>
            </ImageWithText>
        </div>
    </Promo>
  )
}

export default PromoSingle