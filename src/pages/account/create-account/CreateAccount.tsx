import React from 'react'
import AccountForm from '../account-form/AccountForm'
import {object, string} from "yup"
import { ErrorMessage, Field, FormikHelpers } from 'formik'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { createUser, UserState } from '../../../redux/features/user/userSlice'
import { useDispatch } from 'react-redux'
import FormError from '../../../components/form-error/FormError'
import { LoginFormFields } from '../login/Login'
import useBackToAccount from '../../../custom-hooks/useBackToAccount'

export type CreateAccountFormFields = LoginFormFields & {
  firstName: string,
  lastName: string
}

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: ""
}

const validationSchema = object({
  email: string().email("Invalid email.").required("Email must not be empty."),
  password: string().required("Password must not be empty."),
  firstName: string().required("First name must not be empty.").matches(/[aA-zZ]/, "First name must contain only letters"),
  lastName: string().required("Last name must not be empty.").matches(/[aA-zZ]/, "Last name must contain only letters")
})

function CreateAccount() {
  const dispatch: ThunkDispatch<UserState, any, AnyAction> = useDispatch()
  
  useBackToAccount()
    
  const onSubmit = (values: CreateAccountFormFields, helper: FormikHelpers<CreateAccountFormFields>) => {
    dispatch(createUser(values))
  }
  return (
    <div id='create-account-page'>
        <AccountForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          title='create account'
          btnText='create'
        >
          <>
            <div className="form-control">
              <label htmlFor="firstName">first name</label>
              <Field type="text" id="firstName" name="firstName"/>
              <ErrorMessage name='firstName' component={FormError as React.ComponentType}/>
            </div>
            <div className="form-control">
              <label htmlFor="lastName">last name</label>
              <Field type="text" id="lastName" name="lastName"/>
              <ErrorMessage name='lastName' component={FormError as React.ComponentType}/>
            </div>
            <div className="form-control">
              <label htmlFor="email">email</label>
              <Field type="text" id="email" name="email"/>
              <ErrorMessage name='email' component={FormError as React.ComponentType}/>
            </div>
            <div className="form-control">
              <label htmlFor="password">password</label>
              <Field type="password" id="password" name="password"/>
              <ErrorMessage name='password' component={FormError as React.ComponentType}/>
            </div>
          </>
        </AccountForm>
    </div>
  )
}

export default CreateAccount