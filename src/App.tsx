import React, { Component, useEffect } from 'react';
import Header from './layout/header/Header';
import Popup from './components/popup/Popup';
import AppRoutes from './routes/AppRoutes';
import Footer from './layout/footer/Footer';
import {QueryClient, QueryClientProvider} from 'react-query' 
import {ReactQueryDevtools} from "react-query/devtools"
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, UserState } from './redux/features/user/userSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export const BASE_URL = process.env.REACT_APP_BASE_URL

const queryClient = new QueryClient()

function App() {
  const userState = useSelector<UserState>(state => state.user) as UserState
  const {user} = userState
  const dispatch: ThunkDispatch<UserState, null, AnyAction> = useDispatch()

  useEffect(() => {
    const sid = document.cookie
    if (sid.indexOf("sid")!==-1) dispatch(fetchUser())
  }, [])
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <AppRoutes />
        <Footer />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </div>
  )
}

export default App
