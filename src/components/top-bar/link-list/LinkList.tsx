import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import linkList from '../../../static/link-list'
import "./LinkList.scss"

export class LinkList extends Component {
  render() {
    return (
        <ul className='link-list'>
            {linkList.map(({title, link}: {title: string, link: string}, index) => (
                <li className='link-wrapper' key={index}>
                  <Link to={link}>{title}</Link>
                </li>
            ))}
        </ul>
    )
  }
}

export default LinkList