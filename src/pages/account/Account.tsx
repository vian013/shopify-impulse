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
    const userState = useSelector<{user: UserState}>(state => state.user) as UserState
    const {user} = userState
    const dispatch: ThunkDispatch<UserState, any, AnyAction> = useDispatch()

    if (!user) return (
        <Navigate to="/account/login" />
    )

    const {displayName, email, numberOfOrders} = user
    const handleLogout: MouseEventHandler<HTMLButtonElement> = (e) => {
      dispatch(logout())
    }

    const order = (_numberOfOrders: string) => {
      const numberOfOrders = Number(_numberOfOrders)
      if (!numberOfOrders || numberOfOrders === 0) return "You haven't placed any orders yet."
      if (numberOfOrders===1) return "1 order"
      else return `${numberOfOrders} orders`
    }

  return (
    <div id='account-page'>
      <div className="page-width">
      <div className="content-wrapper">
        <Title>my account</Title>
        <SecondaryButton>
          <button className='btn' onClick={handleLogout}>log out</button>
        </SecondaryButton>
        <div className="info">
          <div className="order-history">
            <Title>order history</Title>
            <p>
              {order(numberOfOrders)}
            </p>
          </div>
          <div className="account-details">
            <Title>account details</Title>
            <p>{displayName}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Account