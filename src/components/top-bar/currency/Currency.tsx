import React, { Component, MouseEventHandler } from 'react'
import countries from './countries'
import "./Currency.scss"

const regionName = new Intl.DisplayNames(["en"], {type: "region"})

type Props = {
}

type State = {
  selectedCurrency: string,
  openCurrencyPanel: boolean
}

export class Currency extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  
    this.state = {
      selectedCurrency: "us",
      openCurrencyPanel: false
    }

    this.handleChangeCurrency = this.handleChangeCurrency.bind(this)
    this.handleOpenCurrencyPanel = this.handleOpenCurrencyPanel.bind(this)
  }

  handleChangeCurrency(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const currentTarget = e.currentTarget as HTMLElement
    const currency = currentTarget.getAttribute("data-value")
    this.setState({selectedCurrency: currency!})
  }
  
  handleOpenCurrencyPanel(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    
    
    this.setState({openCurrencyPanel: true})
  }

  componentDidUpdate() {
    const handleClosePanel = (e: Event)=> {
      const target = e.target as HTMLElement
      const panel = target.closest(".currency-select-panel")
      if (!panel && !target.closest(".default")) {
        this.setState({openCurrencyPanel: false})
        removeClickListener()
      }
    }

    const removeClickListener = () => {
      document.removeEventListener("click", handleClosePanel)
    }

    if (this.state.openCurrencyPanel) {
      document.addEventListener("click", handleClosePanel)
    }
  }

  render() {
    const {selectedCurrency, openCurrencyPanel} = this.state
    const selectedCountry = selectedCurrency.length===2 ? regionName.of(selectedCurrency.toUpperCase()) : selectedCurrency.toUpperCase() 
    
    return (
      <div className='currency'>
      <div className="currency-option default" onClick={this.handleOpenCurrencyPanel}>
        <div className={`currency-flag currency-flag--${selectedCurrency}`}>
          <img src="https://cdn.shopify.com/s/files/1/0027/7692/4218/t/35/assets/country-flags-40.png" alt="country-flags" />
        </div>
        <div className="currency-label">{`${selectedCountry}`} (USD $)
        </div>
        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" strokeWidth="2" stroke="#000" fill="none" fillRule="evenodd"></path></svg>
      </div>
        <div className={`currency-select-panel ${openCurrencyPanel?"open":""}`}>
          {countries.map((country, index) => {
            const countryName = country.length===2 ? regionName.of(country.toUpperCase()) : country.toUpperCase()
            return (
              <div key={index} className="currency-option" data-value={country} onClick={this.handleChangeCurrency}>
                <div className={`currency-flag currency-flag--${country}`}>
                  <img src="https://cdn.shopify.com/s/files/1/0027/7692/4218/t/35/assets/country-flags-40.png" alt="country-flags" />
                </div>
                <div className="currency-label">{`${countryName} (USD $)`}</div>
              </div>
            )
          })}
        </div>
    </div>
    )
  }
}

export default Currency