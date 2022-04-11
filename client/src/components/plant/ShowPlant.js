import React from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../../actions/myCart.js'

const ShowPlant = (plant, currentUser) => {

  const handleClick = (event) => {
    console.log(`I was Clicked`)
    addCartItem(plant)  // this needs to work, right now it does nothing
    }


  return (
    <div className='ShowPlant'>
      <h3>{plant.props.attributes.common_name}</h3>
      <p>{plant.props.attributes.botanical_name}</p>
      <p>Light Zones: {plant.props.attributes.light_level}</p>
      <p>Water Needs: {plant.props.attributes.water_needs}</p>
      <p>{plant.props.attributes.description}</p>
      <p>{plant.props.attributes.special_notes}</p>
      <button onClick={function(e) {handleClick(plant, currentUser)}}>Add To Cart</button>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps) (ShowPlant)

