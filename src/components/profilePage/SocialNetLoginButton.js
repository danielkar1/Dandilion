import React, { Component } from 'react';
// import io from 'socket.io-client'
import { inject, observer } from 'mobx-react';
import Axios from 'axios';
import test_URL from '../../test_URL'

const API_URL = test_URL
// const socket = io.connect(API_URL, {secure: true})

@inject(`StartPageStore`)
@observer
class SocialNetLoginButton extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            disabled: ''
        }
        this.popup = null
    }
    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check)
                this.setState({ disabled: '' })
            }
        }, 1000)
    }
    openPopup() {
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${API_URL}/${this.props.network}?u_id=1`
        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        )
    }
    startAuth() {
        this.popup = this.openPopup()
        // this.checkPopup()
    }
    render() {
        return (
            <div className={'button'}>
            {this.props.StartPageStore.socialNetsLoginStatus[this.props.network]?
            <span>
                {this.props.network} Signed-in
            </span>:
                <button
                onClick={this.startAuth.bind(this)}
                >
                    {this.props.network}
                </button>
            }
            </div>
        )
    }
}

export default SocialNetLoginButton;