const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART":
            return action.cart
        case "CLEAR_CART":
            return initialState
        case "ADD_PLANT":
            //return state.concat(action.plant)
        default:
            return state
    }
}