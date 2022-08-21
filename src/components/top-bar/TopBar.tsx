import React, { Component } from 'react'
import Currency from './currency/Currency'
import LinkList from './link-list/LinkList'
import SocialIcons from './social-icons/SocialIcons'
import "./TopBar.scss"

export class TopBar extends Component {
  render() {
    return (
      <div className='top-bar'>
        <div className="left">
          <LinkList />
        </div>
        <div className="right">
          <SocialIcons />
          <Currency />
        </div>
      </div>
    )
  }
}

export default TopBar