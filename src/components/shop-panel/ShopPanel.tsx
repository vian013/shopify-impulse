import React, { Component } from 'react'

function ShopPanel({isOpen}: {isOpen: boolean}) {
  return (
    <div className={`shop-panel ${isOpen?"open":""}`}>
      
    </div>
  )
}

export default ShopPanel