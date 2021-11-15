import React, { Component } from 'react'
import BuildingService from '../services/BuildingService'

class ViewBuildingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            building: {}
        }
    }

    componentDidMount(){
        BuildingService.getBuildingById(this.state.id).then( res => {
            this.setState({building: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Building Details</h3>
                    <div className = "card-body">
                        <div className = "row building--item">
                            <p> Название здания: </p>
                            <p className="building--item__desc"> { this.state.building.name }</p>
                        </div>
                        <div className = "row building--item">
                            <p> Адрес: </p>
                            <p className="building--item__desc"> { this.state.building.address}</p>
                        </div>
                        <div className = "row building--item">
                            <p> Этажи: </p>
                            <p className="building--item__desc"> { this.state.building.quantityOfFloor}</p>
                        </div>
                        <div className = "row building--item">
                            <p> Описание: </p>
                            <p className="building--item__desc"> { this.state.building.description }</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBuildingComponent
