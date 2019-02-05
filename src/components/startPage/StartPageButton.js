import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import Axios from 'axios';
import io from 'socket.io-client'
import test_URL from '../../test_URL'


const API_URL = test_URL
const socket = io(API_URL)
@inject(`StartPageStore`,`ProfileStore`)
@observer
class StartPageButton extends Component {
    oparate = () => {
        let StartPageStore = this.props.StartPageStore
        let StartPageData = StartPageStore.StartPageData
        let url = `${API_URL}/${StartPageStore.location}?socketId=${socket.id}`
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
            <button class="signInButton" onClick={this.oparate}>Login{this.props.StartPageStore.location}</button>
        )
    }
}
export default StartPageButton