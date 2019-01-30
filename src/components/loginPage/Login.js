import React, { Component } from 'react'
import LoginStore from './../../stores/LoginStore'
import { inject } from 'mobx-react';
// import '../styles/Login.css'
@inject("LoginStore")


class Login extends Component {
    handleChange = (e) => {
        this.props.LoginStore.changeLoginData(e.target.name, e.target.value)
    }
    render() {
        const inputSettings = this.props.LoginStore.LoginData
        return (
            <div>
            {Object.keys(LoginStore.LoginData).map((d, index) =>{
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
export default Login