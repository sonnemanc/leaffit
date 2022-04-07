import React from 'react'

const ShowPlant = (plant) => {
  return (
    <div className='ShowPlant'>
      {console.log(plant.props.attributes.common_name)}
      <h3>{plant.props.attributes.common_name}</h3>
      <p>{plant.props.attributes.botanical_name}</p>
      <p>Light Zones: {plant.props.attributes.light_level}</p>
      <p>Water Needs: {plant.props.attributes.water_needs}</p>
      <p>{plant.props.attributes.description}</p>
      <p>{plant.props.attributes.special_notes}</p>
    </div>
  )
}

export default ShowPlant

