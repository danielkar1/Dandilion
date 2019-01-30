import React, { Component } from 'react'
import Axios from 'axios';
import io from 'socket.io-client'
// import PostStore from '../../stores/PostStore'
// import ProfileStore from '../../stores/ProfileStore'
import { observer, inject } from 'mobx-react';
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@inject(`PostStore`, `ProfileStore`)
@observer
class Poster extends Component {
    clickFunc = () => {
        let id = this.props.ProfileStore.id
        let url = `${API_URL}/twitter/post?socketId=${socket.id}`
        Axios.post(url, {
            id: id,
            text: this.props.PostStore.TextInput,
            img: this.props.PostStore.imageInput
        })
            .then(res => console.log(res))
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