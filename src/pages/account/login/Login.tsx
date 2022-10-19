import { Formik, Form, Field, FastField, ErrorMessage, FormikHelpers } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
// import "./Login.scss"
import {object, string} from "yup"
import FormError from '../../../components/form-error/FormError'
import { useDispatch, useSelector } from 'react-redux'
import {AsyncThunkAction, ThunkDispatch, AnyAction} from "@reduxjs/toolkit"
import { login, User, UserState } from '../../../redux/features/user/userSlice'
import { useEffect } from 'react'
import AccountForm from '../account-form/AccountForm'
import useBackToAccount from '../../../custom-hooks/useBackToAccount'

export type LoginFormFields = {
  email: string,
  password: string
}

const initialValues = {
  email: "",
  password: ""
}

const validationSchema = object({
  email: string().email("Invalid email.").required("Email must not be empty."),
  password: string().required("Password must not be empty.")
})

function Login() {
  const dispatch: ThunkDispatch<UserState, any, AnyAction> = useDispatch()
 
  useBackToAccount()
  
  const onSubmit = (values: LoginFormFields, helper: FormikHelpers<LoginFormFields>) => {
    dispatch(login(values))
  }
  
  
  return (
    <div id='login-page'>
      <AccountForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        title="login"
        btnText='sign in'
        bottomText='Create account'
        bottomLink="/account/register"
      >
        <>
          <div className="form-control">
            <label htmlFor="email">email</label>
            <Field type="text" id="email" name="email"/>
            <ErrorMessage name='email' component={FormError as React.ComponentType}/>
          </div>
          <div className="form-control">
            <div className="label-wrapper">
              <label htmlFor="password">password</label>
              <Link to="account/reset-password">Forgot password?</Link>
            </div>
            <FastField name="password" >
              {(props: any) => {
                const {field} = props
                return (
                  <input type="password"  id="password" {...field}/>
                )
              }}
            </FastField>
            <ErrorMessage name='password' component={FormError as React.ComponentType}/>
          </div>
        </>
      </AccountForm>
    </div>
  )
}

export default Login