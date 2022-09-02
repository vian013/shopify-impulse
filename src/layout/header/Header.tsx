import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import TopBar from '../../components/top-bar/TopBar'
import styles from "./Header.module.scss"
import "./Header.scss"

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <TopBar />
        <Navbar />
      </header>
    )
  }
}

export default Header