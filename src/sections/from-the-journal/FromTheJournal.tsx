import React, { Component } from 'react'
import ViewAllButton from '../../components/view-all-btn/ViewAllButton'
import messages from '../../static/messages'

export class FromTheJournal extends Component {
  render() {
    return (
      <div className='from-the-journal section'>
        <div className="title">{messages.sections.fromTheJournal.title}</div>
        <ViewAllButton link='/'/>
      </div>
    )
  }
}

export default FromTheJournal