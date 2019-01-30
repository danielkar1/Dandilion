import React, { Component } from 'react'
import StartPageStore from '../../stores/StartPageStore'
import { inject } from 'mobx-react';
// import '../styles/Login.css'
@inject("StartPageStore")


class StartPage extends Component {
    handleChange = (e) => {
        this.props.StartPageStore.changeLoginData(e.target.name, e.target.value)
    }
    render() {
        const inputSettings = this.props.StartPageStore.LoginData
        return (
            <div>
            {Object.keys(StartPageStore.LoginData).map((d, index) =>{
                return (
                    <div key={index}>
                        <label>{d}</label>
                        <input type={inputSettings[d].type} name={d} onChange={this.handleChange} placeholder={inputSettings[d].placeholder}></input>
                    </div>
                )
            })} 
                <label></label>
                <button>Login</button>
            </div>
        )
    }
}
export default StartPage