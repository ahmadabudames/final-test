import React, { Component } from 'react'

export class DataFromApi extends Component {
    render() {
        return (
            this.props.dataFromApi.slice(0,20).map((obj, idx) => {
                return (
                    <div key={idx}>

                        <h2>
                            {obj.name}
                        </h2>
                        <img src={obj.img} alt="" />

                        <p>
                            {obj.level}
                        </p>

                        <button onClick={e=>this.props.favoriteItem((obj))} >
                            add to favorite
                        </button>

                    </div>
                )
            })

        )
    }
}

export default DataFromApi
