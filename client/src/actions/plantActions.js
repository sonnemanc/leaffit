export const fillPlants = plants => {
    return {
    type: "GET_PLANTS",
    plants
    }
}


export const getPlants = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/plants', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(plants => dispatch(fillPlants(plants)))
    }
}


