import React from 'react'
import { connect } from 'react-redux'
import ShowPlant from './ShowPlant.js'
import { getPlants } from '../../actions/plantActions.js'

class PlantList extends React.Component {

    componentDidMount() {
      this.props.getPlants()
    }

    render() {
        return (
            <div>
                <ul>
                  {this.props.plants.data && this.props.plants.data.map((plant, index) => (<li key={index}><ShowPlant props={plant} /></li>))}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = ({ plants }) => {
    return {
        plants
    }
}

export default connect(mapStateToProps, { getPlants }) (PlantList);