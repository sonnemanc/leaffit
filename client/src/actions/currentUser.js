import {emptyCart, getCart} from './myCart.js'
// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}


//asychronous action creators

export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(x => x.data)
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                //here is where I want to dispatch the setCurrentUser function to the reducer 
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/get_current_user', {
            credentials: 'include',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(x => x.data)
        .then(user => {
            if (user.error) {
                alert("Please Sign-up or Log-in")
            } else {
                //here is where I want to dispatch the setCurrentUser function to the reducer 
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}

//the code below clears the session on the backend
export const logout = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
        .then(
            dispatch(clearCurrentUser()),
            dispatch(emptyCart())
            )
        //.then(dispatch())   I want to clear the cart when logging out
    }
}

