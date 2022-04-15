import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../actions/myCart.js'
import EditItem from './EditForm.js'

const CartItem = (item, plants) => {

    const handleClick = (e) => {
        //console.log(`Removing item from Cart`)
        item.deleteItem(item)
    }

    let quantity = false;

    const handlePopOut = (e) => {
        //console.log(`You just clicked edit!`)
        quantity = !quantity;
        const quantityForm = document.querySelector(`.EditItemContainer${item.props.id}`)
        if (quantity) {
            quantityForm.style.display = "block";
        } else {
            quantityForm.style.display = "none"
        }
    }

    return (
        <div className='CartItem'>
            <ul>
                {console.log(item)}
                <li>{item.plants && search(item.props.id, item.plants).attributes.common_name}</li>
                <div className='quantity'>
                    <li>Quantity: {item.props.attributes.quantity}</li>
                </div>
                <div className={`EditItemContainer${item.props.id}`} style={{display: 'none'}}>
                    <EditItem props={item}/>
                </div>
                
                <button onClick={function(e) {handlePopOut(e)}}>Edit</button>
                <button onClick={function(e) {handleClick(e)}}>Remove</button>
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