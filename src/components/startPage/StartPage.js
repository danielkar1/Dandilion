import React, { Component } from 'react'
import StartPageStore from '../../stores/StartPageStore'
import ProfileStore from '../../stores/ProfileStore'
import { inject, observer } from 'mobx-react'
import Axios from 'axios'

@inject(`StartPageStore`, `ProfileStore`)
@observer
class StartPage extends Component {
    handleChange = (e) => {
        this.props.StartPageStore.changeLoginData(e.target.name, e.target.value)
    }
    login = () => {
        let LoginData = this.props.StartPageStore.LoginData
        Axios.post(`/login`, {
            password: LoginData.password.value,
            name: LoginData.name.value
        })
            .then(Id => {
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
                            <input type={inputSettings[d].type} name={d} onChange={this.handleChange} placeholder={inputSettings[d].placeholder}></input>
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