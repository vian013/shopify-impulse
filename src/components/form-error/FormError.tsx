import React from 'react'
import "./FormError.scss"

function FormError({children}: {children: string}) {
  return (
    <p className='form-error'>
        {children}
    </p>
  )
}

export default FormError
