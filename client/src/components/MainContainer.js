import React from 'react'
import PlantList from './PlantList'
import MyCart from './MyCart'

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <>Inside the main container</>
            <PlantList/>
            <MyCart/>
        </div>
    )
}

export default MainContainer