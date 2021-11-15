import React, { Component } from 'react'
import BuildingService from '../services/BuildingService'

class ListBuildingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                buildings: []
        }
        this.addBuilding = this.addBuilding.bind(this);
        this.editBuilding = this.editBuilding.bind(this);
        this.deleteBuilding = this.deleteBuilding.bind(this);
    }

    deleteBuilding(id){
        BuildingService.deleteBuilding(id).then( res => {
            this.setState({buildings: this.state.buildings.filter(building => building.id !== id)});
        });
    }
    viewBuilding(id){
        this.props.history.push(`/view-building/:${id}`);
    }
    editBuilding(id){
        this.props.history.push(`/add-building/:${id}`);
    }

    componentDidMount(){
        BuildingService.getBuilding().then((res) => {
            this.setState({ buildings: res.data});
        });
    }

    addBuilding(){
        this.props.history.push('/add-building/');
    }

    

    render() {
        return (
            <div>
                 <h2 className="text-center building--title">Список зданий</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBuilding}> Добавить здание</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Название</th>
                                    <th> Фото</th>
                                    <th> Адрес</th>
                                    <th> Количество этажей</th>
                                    <th> Описание</th>
                                    <th> Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.buildings.map(
                                        building => 
                                        <tr key = {building.id}>
                                             <td> { building.name} </td>   
                                             <td> { building.photo} </td>   
                                             <td> {building.address}</td>
                                             <td> {building.quantityOfFloor}</td>
                                             <td> { building.description} </td>   
                                             <td>
                                                 <button onClick={ () => this.editBuilding(building.id)} className="btn btn-info">Обновить </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBuilding(building.id)} className="btn btn-danger">Удалить </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBuilding(building.id)} className="btn btn-info">Этажи </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListBuildingComponent
