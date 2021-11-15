import React, { Component } from 'react'
import CabinetService from '../services/CabinetService'

class ListCabinetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                cabinet: []
        }
        this.addCabinet = this.addCabinet.bind(this);
        this.editCabinet = this.editCabinet.bind(this);
        this.deleteCabinet = this.deleteCabinet.bind(this);
    }

    deleteCabinet(id){
        CabinetService.deleteCabinet(id).then( res => {
            this.setState({cabinet: this.state.cabinet.filter(cabinet => cabinet.id !== id)});
        });
    }
    viewCabinet(id){
        this.props.history.push(`/view-cabinet/:${id}`);
    }
    editCabinet(id){
        this.props.history.push(`/add-cabinet/:${id}`);
    }

    componentDidMount(){
        CabinetService.getCabinet().then((res) => {
            this.setState({ cabinet: res.data});
        });
    }

    addCabinet(){
        this.props.history.push('/add-cabinet/');
    }

    

    render() {
        return (
            <div>
                 <h2 className="text-center cabinet--title">Список Кабинетов</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCabinet}> Добавить кабинет</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Название</th>
                                    <th> Фото</th>
                                    <th> Номер</th>
                                    <th> Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cabinet.map(
                                        cabinet => 
                                        <tr key = {cabinet.id}>
                                             <td> { cabinet.name} </td>   
                                             <td> { cabinet.photo} </td> 
                                             <td> { cabinet.description} </td>   
                                             <td>
                                                 <button onClick={ () => this.editCabinet(cabinet.id)} className="btn btn-info">Обновить </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCabinet(cabinet.id)} className="btn btn-danger">Удалить </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCabinet(cabinet.id)} className="btn btn-info">Открыть </button>
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

export default ListCabinetComponent
