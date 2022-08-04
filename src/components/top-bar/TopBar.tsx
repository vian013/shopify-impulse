import React, { Component } from 'react'
import LinkList from './link-list/LinkList'

export class TopBar extends Component {
  render() {
    return (
      <div className='top-bar'>
        <LinkList />
      </div>
    )
  }
}

export default TopBar