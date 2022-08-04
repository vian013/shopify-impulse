import React, { Component } from 'react'
import linkList from '../../../static/link-list'

export class LinkList extends Component {
  render() {
    return (
        <ul className='link-list'>
            {linkList.map(({title, link}: {title: string, link: string}) => (
                <li className='link-wrapper' key={title}>
                    <a href={link}>{title}</a>
                </li>
            ))}
        </ul>
    )
  }
}

export default LinkList