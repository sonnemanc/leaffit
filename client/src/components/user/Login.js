import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm, resetLoginForm } from '../../actions/loginForm.js'
import { login } from "../../actions/currentUser.js"

            // object destructuring to get props.loginForm
const Login = ({loginFormData, updateLoginForm, login, resetLoginForm }) => {
    const handleInputChange = event => {
            //This V gives me the name and the value of the event.target dynamically
        const { name, value } = event.target
            //This V is spreading the loginForm while updating only the target value
        const updatedFormInfo = {
          ...loginFormData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
        resetLoginForm()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="username:" value={loginFormData.username} name="username" type="text" onChange={handleInputChange}/>
            <input placeholder="password:" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}/>
            <input type="submit" value="Log In"/>
        </form>
    )
}

// the function below will return for me to use as props for this whole component:
// {
//      username: "bob",
//      password: "bobs-password"
// }

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, resetLoginForm, login } )(Login)