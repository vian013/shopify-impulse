import React from 'react'
import { Link } from 'react-router-dom'
import "./MenusWrapper.scss"

function MenusWrapper() {
  return (
    <div className="menus-wrapper">
        <ul className="menu-wrapper">
            <li>
                <Link to={"/"}>Tops</Link>
            </li>
            <li>
                <Link to={"/"}>Tunics</Link>
            </li>
            <li>
                <Link to={"/"}>Dresses</Link>
            </li>
            <li>
                <Link to={"/"}>Sweatshirts</Link>
            </li>
        </ul>
        <ul className="menu-wrapper">
            <li>
                <Link to={"/"}>Spring 2022</Link>
            </li>
            <li>
                <Link to={"/"}>Winter 2022</Link>
            </li>
            <li>
                <Link to={"/"}>Summer 2022</Link>
            </li>
            <li>
                <Link to={"/"}>Fall 2022</Link>
            </li>
        </ul>
        <ul className="menu-wrapper">
            <li>
                <Link to={"/"}>About</Link>
            </li>
            <li>
                <Link to={"/"}>Contact</Link>
            </li>
            <li>
                <Link to={"/"}>FAQ</Link>
            </li>
        </ul>
    </div>
  )
}

export default MenusWrapper