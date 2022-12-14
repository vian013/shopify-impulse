import React from 'react'
import {Route, Routes} from "react-router-dom"
import About from '../pages/about/About'
import Account from '../pages/account/Account'
import CreateAccount from '../pages/account/create-account/CreateAccount'
import Login from '../pages/account/login/Login'
import Home from '../pages/home/Home'
import NotFound from '../pages/not-found/NotFound'
import Product from '../pages/product/Product'
import Breadcrumb from '../pages/products/breadcrumb/Breadcrumb'
import Products from '../pages/products/Products'
function AppRoutes() {
  return (
    <Routes>
        <Route element={<Breadcrumb />}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products'>
            <Route index element={<Products/>}/>
            <Route path=':handle' element={<Product/>}></Route>
          </Route>
          <Route path='/account'>
            <Route index element={<Account/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<CreateAccount/>}></Route>
          </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Route>
    </Routes>
  )
}

export default AppRoutes