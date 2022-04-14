export const setMyCart = cart => {
    return {
        type: "GET_CART",
        cart
    }
}

export const emptyCart = () => {
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

export const removeItem = item => {
    return {
        type: "REMOVE_ITEM",
        item
    }
}

export const editItem = item => {
    return {
        type: "EDIT_ITEM",
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
    console.log(`addCartItem is trying!`)
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/cart_items', {
            credentials: 'include',
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(itemData)
        })
        .then(resp => resp.json())
        .then(x => {
            dispatch(addItem(x))
            alert("Successfully added to Cart")
        })
        .catch(console.log)
    }
}

export const editCartItem = (newQuantity, itemObj) => {
    const item_id = itemObj.id
    const cart_id = itemObj.attributes.cart_id
    const plant_id = itemObj.attributes.plant_id
    const quantity = newQuantity
    const itemData = {quantity, plant_id, cart_id}
    console.log(`editCartItem is trying!`)
    console.log(item_id)
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/cart_items/' + item_id, {
            credentials: 'include',
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(itemData)
        })
        .then(resp => resp.json())
        .then(x => {
            console.log(x.data)
            dispatch(editItem(x.data))
        })
    }
}

export const deleteItem = item => {
    console.log(item.props.id)
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/cart_items/${item.props.id}`, {
            credentials: 'include',
            method:'DELETE'
        })
        .then(
            console.log(item),
            dispatch(removeItem(item.props))
            )
    }
}



