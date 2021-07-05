import React, { Component } from 'react'

export class DataFromCrudApi extends Component {
    render() {
        return (
            this.props.dataFromCrudApi.map((obj, idx) => {
                return (
                    <div key={idx}>

                        <h2>
                            {obj.name}
                        </h2>
                        <img src={obj.img} alt="" />

                        <p>
                            {obj.level}
                        </p>

                        <button onClick={e => this.props.deleteItem((obj.name))} >
                           delete item
                        </button>
                        <button onClick={e => this.props.showUpdate(obj.level , obj.name)} >
                          show update 
                        </button>

                    </div>
                )
            })
        )
    }
}

export default DataFromCrudApi
