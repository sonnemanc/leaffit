export default (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            //if SET_CURRENT_USER is called this will return the user object in its entirety
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
        default:
            return state
    }
}