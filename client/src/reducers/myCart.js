const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART":
            return action.cart
        case "CLEAR_CART":
            return initialState
        case "ADD_PLANT":
            return action.cart.included.concat(action.item)
        case "EDIT_ITEM":
            return state.map(item => item.id === action.item.id ? action.item : item)
        default:
            return state
    }
}