import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import React, { MouseEventHandler, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import SecondaryButton from '../../components/secondary-btn/SecondaryButton'
import Title from '../../components/title/Title'
import ViewAllButton from '../../components/view-all-btn/ViewAllButton'
import { logout, UserState } from '../../redux/features/user/userSlice'
import "./Account.scss"

function Account() {
    const userState = useSelector<UserState>(state => state.user) as UserState
    const {user} = userState
    const dispatch: ThunkDispatch<UserState, any, AnyAction> = useDispatch()

    if (!user) return (
        <Navigate to="/account/login" />
    )

    const {displayName, email} = user
    const handleLogout: MouseEventHandler<HTMLButtonElement> = (e) => {
      dispatch(logout())
    }

  return (
    <div id='account-page'>
      <div className="page-width">
      <div className="content-wrapper">
        <Title>my account</Title>
        <SecondaryButton>
          <button className='btn' onClick={handleLogout}>log out</button>
        </SecondaryButton>
      </div>
      </div>
    </div>
  )
}

export default Account