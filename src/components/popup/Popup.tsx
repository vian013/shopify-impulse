import React, { Component } from 'react'
import popup from '../../static/popup'
import "./Popup.scss"
import parser from "html-react-parser"
import buttons from '../../static/icons/buttons'

type Props = {

}

type State = {
  isOpen: boolean,
  timeId: NodeJS.Timeout | null
}

export class Popup extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  
    this.state = {
      isOpen: false,
      timeId: null
    }

    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleContentClick = this.handleContentClick.bind(this)
  }

  componentDidMount() {
    
    const timeId = setTimeout(() => {
      this.setState({isOpen: true})
    }, 2000);
    this.setState({timeId})
  }

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.body.style.overflowY = "hidden"
      document.body.style.paddingRight = "15px"
    } else {
      document.body.style.overflowY = "initial"
      document.body.style.paddingRight = "0"
    }
  }
  
  componentWillUnmount() {
    clearTimeout(this.state.timeId!)
  }

  handleCloseModal() {
    this.setState({isOpen: false})
  }

  handleContentClick(e: React.MouseEvent) {
    e.stopPropagation()
  }
  
  render() {
    const {isOpen} = this.state
    const {title ,description, emailPlaceholder, imgUrl} = popup
    

    return (
      <div className={`popup-container ${isOpen?'active':''}`} 
      onClick={this.handleCloseModal}
      >
        <div className="popup-wrapper" onClick={this.handleContentClick}>
          <div className="content-wrapper">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="email-wrapper">
              <input type="email" placeholder={emailPlaceholder}/>
              <button>
                {parser(buttons.rightArrow)}
              </button>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={imgUrl} alt="popup-picture" />
          </div>
        </div>
      </div>
    )
  }
}

export default Popup
