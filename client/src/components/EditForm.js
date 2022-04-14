import React from 'react'
import { connect } from 'react-redux'
import { editCartItem } from '../actions/myCart.js'

const EditItem = (props) => {

    const handleEdit = (e) => {
        e.preventDefault()
        console.log(`You just clicked Submit`)
        
        const updatedQuantity = e.target[0].value
        const item = props.props.props
        props.editCartItem(updatedQuantity, item)
    }

    return (
        <form onSubmit={handleEdit}>
            <input placeholder="Enter Quantity Here" defaultValue={props.props.props.attributes.quantity} name='quantity' type='text'/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default connect(null, {editCartItem}) (EditItem)