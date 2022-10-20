import { Form, Formik, FormikValues } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserState } from '../../../redux/features/user/userSlice'
import "./AccountForm.scss"

type Props<FormFields> = {
    initialValues: FormFields,
    onSubmit: (values: FormFields, helper: any) => any,
    validationSchema: Object,
    children: JSX.Element,
    title: string,
    btnText: string,
    bottomText?: string,
    bottomLink?: string,
}

function AccountForm<T extends FormikValues>({initialValues, onSubmit, validationSchema, children, title, btnText, bottomText, bottomLink}: Props<T>) {
  const userState = useSelector<{user: UserState}>(state => state.user) as UserState
  const {loading} = userState
    
  return (
    <div className="account-form">
        <div className="content-wrapper">
          <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit} 
            validationSchema={validationSchema} 
          >
            {formik => {
              return (
                <Form>
                  <h1 className='title'>{title}</h1>
                    {children}
                  <button type='submit' className='shop-btn'>{loading ? "loading..." : btnText}</button>
                </Form>
              )
            }}
          </Formik>
          {bottomText&&bottomLink&&<Link className='register-link' to={bottomLink}>{bottomText}</Link>}
        </div>
      </div>
  )
}

export default AccountForm