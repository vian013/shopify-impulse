import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ViewAllButton from '../../components/view-all-btn/ViewAllButton'
import { CombinedProps } from '../../hoc/withUseQuery'
import messages from '../../static/messages'
import "./PopularPicks.scss"

type Props = {}

export type AllProps = CombinedProps<Product[], Props>

type State = {
}

export type Product = {
    featuredImage: string,
    title: string,
    handle: string,
    price: number,
}

export class PopularPicks extends Component<AllProps, State> {
    
  render() {
    const {title} = messages.sections.popularPicks
    const {data, isLoading} = this.props.queryResult
    const products = data?.slice(0, 4)
    
    return (
      <div className='popular-picks section'>
        <div className="page-width">
          <div className="title">{title}</div>
          <ViewAllButton link='/products'/>

          {isLoading ? 
            <h1>Loading...</h1> :
            <div className="products-wrapper">
                {products!.map(({featuredImage, title, price, handle}, index)=>(
                    <div className="product-wrapper" key={index}>
                      <Link to={`/products/${handle}`}>
                        <div className="img-wrapper">
                          <img src={featuredImage} alt={handle} />
                        </div>
                        <div className="content-wrapper">
                          <p className="title">{title}</p>
                          <p className="price">${price}</p>
                        </div>
                      </Link>
                    </div>
                ))}
            </div>
          }
        </div>
      </div>
    )
  }
}


export default PopularPicks