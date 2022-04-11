import React from 'react'
import image from "../Light Zones Colorized.jpg"

const Home = () => {
    return (
        <div className="Home">
            <div className="welcome">
                <h3>Welcome to Leaffit!</h3>
                <h4>We are dedicated to helping you find the right plants for your space!</h4>
                <h4>For starters, use the picture below to identify the brightness of the space you are looking to fill!

                </h4>
                <div className="light-zones">
                    <img className="colorized" src={image} />
                </div>
            </div>
        </div>

    )
}

export default Home
