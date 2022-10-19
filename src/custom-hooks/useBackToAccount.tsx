import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../redux/features/user/userSlice'

function useBackToAccount() {
    const userState = useSelector<UserState>(state => state.user) as UserState
  const {user} = userState
  const navigate = useNavigate()
    
  useEffect(()=>{
    if(user) navigate("/account")
  }, [user])
}

export default useBackToAccount