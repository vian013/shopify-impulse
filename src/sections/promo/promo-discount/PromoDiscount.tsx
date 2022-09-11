import React from 'react'
import ImageWithTextDiscount from '../../../components/image-with-text-discount/ImageWithTextDiscount'
import Promo from '../Promo'
import "./PromoDiscount.scss"

function PromoDiscount() {
  return (
    <Promo>
        <div className="promo-discount">
            <ImageWithTextDiscount 
                link='/'
                discountAmount='50'
                img1='https://cdn.shopify.com/s/files/1/0027/7692/4218/products/WDY277-Heather-Gray-1_360x.jpg?v=1526306282'
                img2='https://cdn.shopify.com/s/files/1/0027/7692/4218/products/WDY538-Chelsea-Gray-1_360x.jpg?v=1526306279'
                title='Select products'
            />
            <ImageWithTextDiscount 
                link='/'
                discountAmount='25'
                img1='https://cdn.shopify.com/s/files/1/0027/7692/4218/products/T185143-Heather-1_360x.jpg?v=1584465598'
                img2='https://cdn.shopify.com/s/files/1/0027/7692/4218/products/WTY518-Ivory-1_360x.jpg?v=1526306247'
                title='summer tops'
            />
        </div>
    </Promo>
  )
}

export default PromoDiscount