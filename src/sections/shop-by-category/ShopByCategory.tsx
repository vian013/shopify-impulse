import React, { Component } from 'react'
import messages from '../../static/messages'
import CollectionPanel from './collection-panel/CollectionPanel'
import "./ShopByCategory.scss"

type Props ={}

type State ={}

export class ShopByCategory extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    
      this.state = {
      }
    }
    
  render() {
    return (
      <div className='shop-by-category section'>
        <div className="page-width">
          <div className="title">{messages.sections.shopByCategory.title}</div>
          <CollectionPanel />
        </div>
      </div>
    )
  }
}

export default ShopByCategory