import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SocialNetStore from '../../stores/SocialNetStore';
@inject("SocialNetStore")

@observer
class CheckInputs extends Component {
    handleChange =(e) => {
        this.props.SocialNetStore.checkboxHandler(e.target.name)
    }
    render() {
        const socialNetsArr = Object.keys(SocialNetStore.networks)
        return (
            <div className="checkbox-inputs">
                {socialNetsArr.map((s, index) => {
                   return (
                    <div key={index} className="social-net">
                        <input onChange={this.handleChange} type="checkbox" name={s}></input>
                        <label>{s}</label>
                    </div>)
                })}
    
            </div>
        );
    }
}

export default CheckInputs;