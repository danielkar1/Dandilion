import React, { Component } from 'react';
import io from 'socket.io-client'
import { inject, observer } from 'mobx-react';
import Axios from 'axios';

const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@inject(`ProfileStore`)
@observer
class TwitterButton extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            disabled: ''
        }
        this.popup = null
    }
    // Object { accessToken: "1220749249-g2rWUYleLAWmpTXxRToDJGGJhvZV7naeh8xO3Pg", refreshToken: "DXNV84ktNIddkoohOoT44typ2mTu8fHX0ri38lQ0pfIHb", profile: {…}, socialNetwork: "twitter" } TwitterButton.js:23

    componentDidMount() {
        socket.on('user', user => {
            this.popup.close()
            let socialData = {
                internalId: this.props.ProfileStore.internalId,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
                socialNetwork: user.socialNetwork,
                socialNetworkId: user.profile.id
            }
            console.log(socialData)
            // Axios.post(`/save`,socialData)
            // this.props.ProfileStore.clientInternalIdstorage(user._id)
        })
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
        const url = `${API_URL}/twitter?socketId=${socket.id}`
        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        )
    }
    startAuth() {
        this.popup = this.openPopup()
        this.checkPopup()
    }
    render() {
        return (
            <div className={'button'}>
                <button
                    onClick={this.startAuth.bind(this)}
                >
                    button
                </button>
            </div>
        )
    }
}

export default TwitterButton;