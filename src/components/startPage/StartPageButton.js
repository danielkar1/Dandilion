import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Axios from 'axios';
// import io from 'socket.io-client'
import test_URL from '../../test_URL'


// const socket = io(test_URL)
@inject(`StartPageStore`,`ProfileStore`)
@observer
class StartPageButton extends Component {
    oparate = () => {
        let StartPageStore = this.props.StartPageStore
        let StartPageData = StartPageStore.StartPageData
        let url = `${test_URL}/${StartPageStore.location}`
        Axios.post(url, {
            password: StartPageData.password.value,
            name: StartPageData.name.value
        })
            .then(Id => {
                this.props.ProfileStore.clientInternalIdstorage(Id)
                this.props.StartPageStore.resetValues()
            })
    }
    render() {
        return (
            <div onClick={this.oparate}>Login{this.props.StartPageStore.location}</div>
        )
    }
}
export default StartPageButton