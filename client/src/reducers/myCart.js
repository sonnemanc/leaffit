const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART":
            return action.cart
        case "CLEAR_CART":
            return initialState
        case "ADD_PLANT":
            console.log(action.item)
            return action.cart.attributes.concat(action.item)
        default:
            return state
    }
}