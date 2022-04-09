export default (state = [], action) => {
    switch (action.type) {
        case "GET_CART":
            return action.cart
        case "CLEAR_CART":
            return []
        default:
            return state
    }
}