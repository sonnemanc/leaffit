import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import plants from './reducers/plantList'
import cart from './reducers/myCart.js'
import  thunk  from 'redux-thunk'

const reducer = combineReducers({
    currentUser,
    loginForm,
    plants, 
    cart
  })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store