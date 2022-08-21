import React, { Component } from 'react'
import Nav from '../navbar/Navbar'
import TopBar from '../top-bar/TopBar'
import styles from "./Header.module.scss"
import "./Header.scss"

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <TopBar />
        <Nav />
      </header>
    )
  }
}

export default Header