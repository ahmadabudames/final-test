import React, { Component } from 'react'
import DataFromCrudApi from './DataFromCrudApi'
import axios from 'axios';
import ShowFormCrud from './ShowFormCrud';
export class Favorite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            dataFromCrudApi: [],
            showDataFromCrudApi: false,
            showMessage: false,
            message: '',
            level: '',
            nameOfName:'',
            showUpdateForm: false

        }
    }

    deleteItem = async (name) => {
        const request = await axios.delete(`${this.state.Url}/ahmad/digimon/${name}`);

        this.setState({
            dataFromCrudApi: request.data,

        })
    }

    showUpdate = (level,name) => {
        this.setState({
            level: level,
            nameOfName:name,
            
            showUpdateForm: true

        })
    }
    updateOfLevel = (e) => this.setState({ level: e.target.value });


    updateItem=async(e)=>{
        e.preventDefault();

        const request=await axios.put(`${this.state.Url}/ahmad/digimon/${this.state.nameOfName}`,{level:this.state.level});
        this.setState({
            dataFromCrudApi:request.data,
        })
    }

    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/ahmad/digimon`);
        this.setState({
            dataFromCrudApi: request.data,
            showDataFromCrudApi: true
        })
    }





    render() {
        return (
            <>
            {
                this.state.showMessage&&
                <h2>
                    {this.state.message}
                </h2>
            }
              {
                    this.state.showUpdateForm&&
                    <ShowFormCrud
                    updateItem={this.updateItem}
                    updateOfLevel={this.updateOfLevel}
                    level={this.state.level}
                    />
                }
                {
                    this.state.showDataFromCrudApi &&
                    <DataFromCrudApi
                        dataFromCrudApi={this.state.dataFromCrudApi}
                        deleteItem={this.deleteItem}
                        showUpdate={this.showUpdate}

                    />
                }
              

            </>
        )
    }
}

export default Favorite
