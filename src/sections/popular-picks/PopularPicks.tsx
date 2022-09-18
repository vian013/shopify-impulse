import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../App'
import messages from '../../static/messages'

type Props = {}

type State = {
    handle: string,
    products: Product[]
}

type Product = {
    featuredImage: string,
    title: string,
    handle: string,
    price: number,
}

export class PopularPicks extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    
      this.state = {
        handle: "adidas",
        products: []
      }
    }

    componentDidMount(): void {
        const fetchProducts = async () => {
            const res = await fetch(`${BASE_URL}/collections/${this.state.handle}`)
            const _products = await res.json()
            this.setState({products: _products.slice(0, 4)})
        }

        fetchProducts()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    }
    
  render() {
    const {handle, products} = this.state
    
    return (
      <div className='popular-picks section'>
        <div className="title">{messages.sections.popularPicks.title}</div>
        <Link to={`/collections/${handle}`}></Link>

        {products.length === 0 ? 
            <h1>Loading...</h1> :
            <div className="products-wrapper">
                {products.map(({featuredImage, title, price}, index)=>(
                    <div className="product-wrapper" key={index}>
                        <div className="img-wrapper">
                          <img src={featuredImage} alt={handle} />
                        </div>
                        <div className="content-wrapper">
                          <p className="title">{title}</p>
                          <p className="price">${price}</p>
                        </div>
                    </div>
                ))}
            </div>
        }
      </div>
    )
  }
}

export default PopularPicks