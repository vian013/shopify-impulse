import React, { Component } from 'react'
import ViewAllButton from '../../components/view-all-btn/ViewAllButton'
import messages from '../../static/messages'
import ArticlesWrapper from './articles-wrapper/ArticlesWrapper'

export class FromTheJournal extends Component {
  
  render() {
    const {title} = messages.sections.fromTheJournal
    return (
      <div className='from-the-journal section'>
        <div className="title">{title}</div>
        <ViewAllButton link='/blogs'/>
        <ArticlesWrapper />
      </div>
    )
  }
}

export default FromTheJournal