import React from 'react'
import { editCartItem } from '../actions/myCart.js'

const EditItem = (props) => {

    const handleEdit = (e) => {

    }

    return (
        <form onSubmit={handleEdit}>
            <input placeholder="quantity" value={undefined} name='quantity' type='integer'/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default EditItem