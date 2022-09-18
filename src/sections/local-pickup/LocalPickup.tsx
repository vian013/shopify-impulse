import React, { Component } from 'react'
import ContentBox from '../../components/content-box/ContentBox'
import messages from '../../static/messages'
import "./LocalPickup.scss"

export class LocalPickup extends Component {
  render() {
    const {title, btnText} = messages.sections.localPickup
    
    return (
      <div className='local-pickup section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.097983432866!2d105.85039651424528!3d21.02876509315564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x592af2b3af982b00!2zMjHCsDAxJzQzLjUiTiAxMDXCsDUxJzA5LjMiRQ!5e0!3m2!1sen!2s!4v1663427584696!5m2!1sen!2s" width="100%" height="500" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <ContentBox 
          title={title}
          btnText={btnText}
        >
          <>
            <p>
              301 Front St W
              <br />
              Toronto, Canada
            </p>
            <p>
              Mon - Fri, 8:30am - 10:30pm
              <br />
              Saturday, 8:30am - 10:30pm
              <br />
              Sunday, 8:30am - 10:30pm
            </p>
          </>
        </ContentBox>
      </div>
    )
  }
}

export default LocalPickup