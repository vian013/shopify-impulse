import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./CollectionPanel.scss"
import withUseQuery, { CombinedProps } from '../../../hoc/withUseQuery'

export type Props = {
}

export type AllProps = CombinedProps<Collection[], Props>

type State = {
}

export type Collection = {
    title: string,
    imgUrl: string,
    handle: string
}

export class CollectionPanel extends Component<AllProps, State> {
 
  render() {
    const {isLoading, data} = this.props.queryResult
    const collections = data?.slice(0, 4)
    
    return isLoading ? (
      <h1>Loading...</h1>
    )
    :(
      <div className='collection-panel'>
        {collections!.map(({imgUrl, handle, title}, index) => (
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

const fetchCollections = async() => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/collections`) 
  const data = await res.json()
  return data
}

export default withUseQuery<Collection[], Props>({
  queryId:['fetch-collection'],
  queryFn:fetchCollections
})(CollectionPanel)