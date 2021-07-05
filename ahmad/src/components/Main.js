import axios from 'axios';
import React, { Component } from 'react'
import DataFromApi from './DataFromApi';
export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            dataFromApi: [],
            showDataFromApi: false,
            showMessage: false,
            message: ''

        }
    }
    favoriteItem = async (dataobj) => {
        const postRequest = await axios.post(`${this.state.Url}/ahmad/digimon`, dataobj)
        this.setState({
            message: postRequest.data,
            showMessage: true
        })
    }
    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/ahmad`);
        this.setState({
            dataFromApi: request.data,
            showDataFromApi: true
        })
    }
    render() {
        return (
            <>

                {
                    this.state.showMessage &&
                    <h3>
                        {this.state.message}
                    </h3>
                }
                {
                    this.state.showDataFromApi &&
                    <DataFromApi
                        dataFromApi={this.state.dataFromApi}
                        favoriteItem={this.favoriteItem}
                    />
                }
            </>
        )
    }
}

export default Main
