import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import TopBar from '../../components/top-bar/TopBar'
import AnnouncementBar from '../../sections/announcement-bar/AnnouncementBar'
import "./Header.scss"

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <TopBar />
        <Navbar />
        <AnnouncementBar/>
      </header>
    )
  }
}

export default Header