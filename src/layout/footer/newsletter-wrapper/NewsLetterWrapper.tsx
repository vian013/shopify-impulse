import React, { ChangeEvent, Component, FormEvent } from 'react'
import SocialIcons from '../../../components/top-bar/social-icons/SocialIcons'
import messages from '../../../static/messages'
import "./NewsLetterWrapper.scss"

type Props = {

}

type State = {
    email: string
}

export class NewsLetterWrapper extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    
      this.state = {
        email: ""
      }

      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }
    
    handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({email: e.target.value})
    }

  render() {
    const {title, placeholder} = messages.sections.footer.newsletter

    return (
      <div className='newsletter-wrapper'>
        <div className="title">{title}</div>
        <form className='email-wrapper' onSubmit={this.handleOnSubmit}>
            <input type="text" placeholder={placeholder} onChange={this.handleOnChange}/>
            <button type='submit'>
             <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-email" viewBox="0 0 64 64"><path d="M63 52H1V12h62zM1 12l25.68 24h9.72L63 12M21.82 31.68L1.56 51.16m60.78.78L41.27 31.68"></path></svg>
            </button>
        </form>
        <SocialIcons />
        <div className="social-wrapper"></div>
      </div>
    )
  }
}

export default NewsLetterWrapper