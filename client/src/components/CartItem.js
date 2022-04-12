import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../actions/myCart.js'

const CartItem = (item) => {

    const handleClick = (e) => {
        console.log(`You just cliked Remove`)
        item.deleteItem(item)
    }
    return (
        <div className='CartItem'>
            <ul>
                <li>{search(item.props.attributes.plant_id, item.plants).attributes.common_name}</li>
                <li>Quantity: {item.props.attributes.quantity}</li>
                <button>Edit</button>
                <button onClick={function(e) {handleClick(handleClick(e))}}>Remove</button>
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

export default connect(mapStateToProps, {deleteItem}) (CartItem)