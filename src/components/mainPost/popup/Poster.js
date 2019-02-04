import React, { Component } from 'react'
import Axios from 'axios';
import io from 'socket.io-client'
import { observer, inject } from 'mobx-react'
import test_URL from '../../../test_URL'

const API_URL = test_URL 
const socket = io.connect(API_URL)

@inject(`PostStore`, `ProfileStore`, `SocialNetStore`)
@observer
class Poster extends Component {
    clickFunc = () => {
        let id = 1
        let url = `${API_URL}/post?socketId=${socket.id}`
        let clientInput = {
            networks: this.props.SocialNetStore.networksUsed,
            id: id,
            text: this.props.PostStore.Text,
            img: this.props.PostStore.Image
        }
        Axios.post(url, clientInput)
            .then(res => {
                this.props.StartPageStore.resetValues()
            })
    }
    render() {
        return (
            <button
                onClick={this.clickFunc}
            >
                Post
            </button>
        )
    }
}
export default Poster