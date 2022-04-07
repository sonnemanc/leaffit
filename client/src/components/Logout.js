import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"

            // object destructuring to get props.loginForm
const Logout = ({ logout }) => {

    return(
        <form onSubmit={logout}>
            <input type="submit" value="Log Out"/>
        </form>
    )
}

export default connect(null, { logout } )(Logout)


//remember to add
 //action/creator
 //additional case statement in reducer