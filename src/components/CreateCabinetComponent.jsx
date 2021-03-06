import React, { Component } from 'react'
import CabinetService from '../services/CabinetService';

class CreateCabinetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id ? this.props.match.params.id : null,
            name: '',
            number: '',
            description: ''

        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeStagesHandler = this.changeStagesHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateCabinet = this.saveOrUpdateCabinet.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === null){
            return
        }else{
            CabinetService.getCabinetById(this.state.id).then( (res) =>{
                let cabinet = res.data;
                this.setState({name: cabinet.name,
                    number: cabinet.number,
                    stages : cabinet.stages,
                    description : cabinet.description
                });
            });
        }        
    }
    saveOrUpdateCabinet = (e) => {
        e.preventDefault();
        let cabinet = {name: this.state.name, number: this.state.number, stages: this.state.stages, description: this.state.description};
        console.log('cabinet => ' + JSON.stringify(cabinet));

        // step 5
        if(this.state.id === null){
            CabinetService.createCabinet(cabinet).then(res =>{
                this.props.history.push('/cabinets');
            });
        } else {
            CabinetService.updateCabinet(cabinet, this.state.id).then( res => {
                this.props.history.push('/cabinets');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value});
    }

    changeStagesHandler= (event) => {
        this.setState({stages: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }




    cancel(){
        this.props.history.push('/cabinets');
    }

    getTitle(){
        if(this.state.id === null){
            return <h3 className="text-center">???????????????? ????????????????</h3>
        }else{
            return <h3 className="text-center">???????????????? ????????????????</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> ????????????????: </label>
                                            <input placeholder="????????????????" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ??????????: </label>
                                            <input placeholder="??????????" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ????????????????: </label>
                                            <input placeholder="????????????????" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCabinet}>??????????????????</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>????????????</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateCabinetComponent