import React, { Component } from 'react'
import TopBar from '../top-bar/TopBar'
import styles from "./Header.module.scss"

export class Header extends Component {
  render() {
    return (
      <div className={styles["header-hihi"]}>
        <TopBar />
      </div>
    )
  }
}

export default Header