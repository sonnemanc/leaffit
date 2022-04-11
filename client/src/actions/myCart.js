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

export const addItem = item => {
    return {
        type: "ADD_PLANT",
        item

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
        .then(x => x.included)
        .then(cart => dispatch(setMyCart(cart)))
    }
}

export const addCartItem = data => {
    const plant_id = data.props.id
    const cart_id = data.currentUser.relationships.cart.data.id
    const quantity = 1
    const itemData = {quantity, plant_id, cart_id}
    //console.log(itemData)
    console.log(`addCartItem is trying!`)
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/cart_items', {
            credentials: 'include',
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(itemData)
        })
        .then(resp => resp.json())
        //.then(y => console.log(y))
        .then(x => dispatch(addItem(x)))
        
    }
}
