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
        console.log(StartPageData.password.value)
        Axios.post(url, {
            password: StartPageData.password.value,
            name: sessionStorage.getItem(`name`)
        })
            .then(Id => {
                console.log(Id)
                if (Id.data) {
                    Id = Id.data.id
                    this.props.StartPageStore.updateId(Id)
                    this.props.StartPageStore.resetValues()
                    window.sessionStorage.setItem('status', 'loggedIn')
                    window.sessionStorage.setItem('u_id', Id)
                } else {
                    alert(`Wrong user or password`)
                }
            })
    }
    render() {
        return (
            <div className={`myButton ${this.props.location}`}
                onClick={this.oparate}>
                {this.props.location}
            </div>
        )
    }
}
export default StartPageButton