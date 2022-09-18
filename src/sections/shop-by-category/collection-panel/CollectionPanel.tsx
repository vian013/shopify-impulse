import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./CollectionPanel.scss"

type Props = {}

type State = {
    collections: Collection[]
}

type Collection = {
    title: string,
    imgUrl: string,
    handle: string
}

export class CollectionPanel extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    
      this.state = {
        collections: []
      }
    }

    async componentDidMount(): Promise<void> {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/collections`) 
      const data = await res.json()
      this.setState({collections: data.slice(0, 4)})
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
      // console.log(this.state.collections);
    }
    
  render() {
    const {collections} = this.state
    return collections.length === 0 ? (
      <h1>Loading...</h1>
    )
    :(
      <div className='collection-panel'>
        {collections.map(({imgUrl, handle, title}, index) => (
          <div className="collection-wrapper" key={index}>
            <Link to={`/collections/${handle}`}>
              <div className="img-wrapper">
                <img src={imgUrl} loading="lazy" />
              </div>
              <div className="title">{title}</div>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default CollectionPanel