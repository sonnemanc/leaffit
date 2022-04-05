// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//asychronous action creators

export const login = credentials => {
    console.log(credentials)
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
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