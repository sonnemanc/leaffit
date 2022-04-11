import React from 'react'
import { connect } from 'react-redux'
import ShowPlant from './ShowPlant.js'

class PlantList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                  {this.props.plants && this.props.plants.map((plant, index) => (<li key={index}><ShowPlant props={plant} /></li>))}
                </ul>
            </div>
        )}
}

const mapStateToProps = ({ plants }) => {
    return {
        plants
    }
}

export default connect(mapStateToProps) (PlantList);