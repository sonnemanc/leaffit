import React from 'react'
import PlantList from './plant/PlantList'
import MyCart from './MyCart'

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <>Inside the main container</>
            PlantList
            MyCart
        </div>
    )
}

export default MainContainer

// No Longer using this container since React Router in place