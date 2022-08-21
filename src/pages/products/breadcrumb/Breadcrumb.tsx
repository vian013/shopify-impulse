import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Popup from '../../../components/popup/Popup';

function Breadcrumb() {
    const location = useLocation()
    const [isPathChanged, setIsPathChanged] = useState<boolean>(false)
    
    useEffect(()=>{
        setIsPathChanged(true)
    }, [location.pathname])
    
    const handleClosePopup = ()=> {
        setIsPathChanged(false)
    }
    
  return (
    <div className='breadcrumb'>
        {/* <Popup isPathChanged={isPathChanged} handleClosePopup={handleClosePopup}/> */}
        <Outlet />
    </div>
  )
}

export default Breadcrumb