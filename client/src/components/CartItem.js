import React from 'react'
import { connect } from 'react-redux'

const CartItem = (item) => {
    return (
        <div className='CartItem'>
            <>This is an individual item in the cart!</>
            <ul>
                <li>{search(item.props.attributes.plant_id, item.plants.data).attributes.common_name}</li>
                <li>Quantity: {item.props.attributes.quantity}</li>
            </ul>
            
        </div>
    )
}

function search(id, plant_arr) {
    for (let index = 0; index < plant_arr.length; index++) {
        if (plant_arr[index].id == id) {
            return plant_arr[index];
        }
    }
}


const mapStateToProps = ({ plants }) => {
    return {
        plants
    }
}

export default connect(mapStateToProps) (CartItem)