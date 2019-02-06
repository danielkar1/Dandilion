import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Axios from 'axios';
// import io from 'socket.io-client'
import test_URL from '../../test_URL'


// const socket = io(test_URL)
@inject(`StartPageStore`)
@observer
class StartPageButton extends Component {
    oparate = () => {
        let StartPageStore = this.props.StartPageStore
        let StartPageData = StartPageStore.StartPageData
        let url = `${test_URL}/${this.props.location}`
        Axios.post(url, {
            password: StartPageData.password.value,
            name: StartPageData.name.value
        })
            .then(Id => {
                this.props.StartPageStore.updateId(Id)
                this.props.StartPageStore.resetValues()
            })
    }
    render() {
        return (
            <div className="myButton" onClick={this.oparate}>{this.props.location}</div>
        )
    }
}
export default StartPageButton