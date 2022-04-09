export const setMyCart = cart => {
    return {
        type: "GET_CART",
        cart
    }
}

export const emptyCart = cart => {
    return {
        type: "CLEAR_CART"
    }
}

export const getCart = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/users/1/carts/1', {
            credentials: 'include',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(cart => dispatch(setMyCart(cart)))
    }
}
