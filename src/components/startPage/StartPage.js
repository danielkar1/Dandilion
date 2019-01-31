import React, { Component } from 'react'
import StartPageStore from '../../stores/StartPageStore'
import ProfileStore from '../../stores/ProfileStore'
import { inject, observer } from 'mobx-react'
import Axios from 'axios'
import io from 'socket.io-client'

const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@inject(`StartPageStore`, `ProfileStore`)
@observer
class StartPage extends Component {
    handleChange = (e) => {
        this.props.StartPageStore.changeLoginData(e.target.name, e.target.value)
    }
    login = () => {
        let LoginData = this.props.StartPageStore.LoginData
        console.log(this.props.StartPageStore.LoginData.password.value)
        let url = `${API_URL}/login?socketId=${socket.id}`
        console.log(LoginData)
        Axios.post(url, {LoginData
        })
            .then(Id => {
                console.log(`sadas`)
                ProfileStore.clientInternalIdstorage(Id)
                this.props.StartPageStore.resetValues()
               
            })
    }
    render() {
        const inputSettings = this.props.StartPageStore.LoginData
        return (
            <div>
                {Object.keys(StartPageStore.LoginData).map((d, index) => {
                    return (
                        <div key={index}>
                            <label>{d}</label>
                            <input type={inputSettings[d].type} name={d} onKeyPress={this.handleChange} placeholder={inputSettings[d].placeholder}></input>
                        </div>
                    )
                })}
                <label></label>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default StartPage