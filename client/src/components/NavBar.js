import React from 'react'
import { connect } from 'react-redux'
import Login from "./user/Login.js"
import Logout from "./user/Logout.js"
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser }) => {
    return (
        <div className='NavBar'>
            <div className='Links'>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/plants">Our Plants</NavLink>
              <NavLink to="/cart">My Cart</NavLink>
              
              <div className='user_nav'>
                  {currentUser ? `Welcome, ${currentUser.data.attributes.name}` : ``}
                  {currentUser ? <Logout/> : <Login/>}
                  <button> Sign Up </button>
              </div>

            </div>

        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}



export default connect(mapStateToProps) (NavBar)