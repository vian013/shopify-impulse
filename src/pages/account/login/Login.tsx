import { Formik, Form, Field, FastField, ErrorMessage, FormikHelpers } from 'formik'
import { Link } from 'react-router-dom'
import "./Login.scss"
import {object, string} from "yup"
import FormError from '../../../components/form-error/FormError'
import { useDispatch } from 'react-redux'
import {AsyncThunkAction, ThunkDispatch, AnyAction} from "@reduxjs/toolkit"
import { login, User, UserState } from '../../../redux/features/user/userSlice'

type FormFields = {
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
  
  const onSubmit = (values: FormFields, submit: FormikHelpers<FormFields>) => {
    console.log("submit");
    dispatch(login(values))
  }
  
  return (
    <div id='login-page'>
      <div className="page-width">
        <div className="content-wrapper">
          <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit} 
            validationSchema={validationSchema} 
          >
            {formik => {
              return (
                <Form>
                  <h1 className='title'>Login</h1>
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
  
                  <button type='submit' className='shop-btn'>sign in</button>
                  <Link className='register-link' to={"/account/register"}>Create account</Link>
                </Form>
              )
            }}
          </Formik>

        </div>
      </div>
    </div>
  )
}

export default Login