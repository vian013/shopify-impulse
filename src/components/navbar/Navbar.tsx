import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="search-btn btn">
        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 64 64">
          <g>
            <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path>
          </g>
        </svg>
      </div>
      <nav>
        <Link className='link-wrapper' to={"/collections/all"}>shop</Link>
        <Link className='link-wrapper' to={"/#"}>season</Link>
        <Link className='link-wrapper' to={"/"}>
          <div className="logo-wrapper">
            <img src="https://cdn.shopify.com/s/files/1/0027/7692/4218/files/logo-black-38px_7361969b-816c-4fec-a442-9f24e767ae50_110x@2x.png?v=1525719500" alt="logo-black" />
          </div>
        </Link>
        <Link className='link-wrapper' to={"/blogs/news"}>journal</Link>
        <Link className='link-wrapper' to={"/pages/features"}>theme features</Link>
      </nav>
      <div className="account-and-cart">
          <Link to={"account"}>
            <div className="account-btn btn">
                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-user" viewBox="0 0 64 64">
                  <g>
                    <path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path>
                  </g>
                </svg>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="cart-btn btn">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-bag" viewBox="0 0 64 64">
                <g>
                  <path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path>
                </g>
              </svg>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Navbar