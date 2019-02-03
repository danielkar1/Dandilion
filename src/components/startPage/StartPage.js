import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Axios from 'axios'
import io from 'socket.io-client'
import Inputs from './Inputs'
// import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom'

const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@inject(`StartPageStore`, `ProfileStore`)
@observer
class StartPage extends Component {
    login = () => {
        let StartPageData = this.props.StartPageStore.StartPageData
        console.log(this.props.StartPageStore.StartPageData.password)
        let url = `${API_URL}/login?socketId=${socket.id}`
        console.log(StartPageData)
        Axios.post(url, {
            password: StartPageData.password.value,
            name: StartPageData.name.value
        })
            .then(Id => {
                this.props.ProfileStore.clientInternalIdstorage(Id)
                this.props.StartPageStore.resetValues()
               
            })
    }
    oparate = () => {

    }
    render() {
        return (
            <div>
                <Inputs />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default StartPage