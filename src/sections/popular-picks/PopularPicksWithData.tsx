import React, { Component } from 'react'
import { BASE_URL } from '../../App'
import withUseQuery from '../../hoc/withUseQuery'
import PopularPicks, { Product } from './PopularPicks'

type Props = {
}

export class PopularPicksWithData extends Component<Props> {
    state = {
        handle: "adidas"
    }

  render() {
    const fetchProducts = async () => {
        const res = await fetch(`${BASE_URL}/collections/${this.state.handle}`)
        const _products = await res.json()
        return _products
    }

    const Component = withUseQuery<Product[], {}>({
        queryId: ['fetch-products'],
        queryFn: fetchProducts
    })(PopularPicks)
    return (
        <Component />
    )
  }
}

export default PopularPicksWithData