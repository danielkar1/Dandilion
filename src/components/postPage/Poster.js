import React, { Component } from 'react'
import Axios from 'axios';
import io from 'socket.io-client'
import { observer, inject } from 'mobx-react';
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)
// const Posts = require('../../../server/modules/Scheme')

@inject(`PostStore`, `ProfileStore`)
@observer
class Poster extends Component {
    clickFunc = () => {
        let id = 1
        let url = `${API_URL}/twitter/post?socketId=${socket.id}`
        let clientInput = {
            id: id,
            text: this.props.PostStore.Text,
            img: this.props.PostStore.Image
        }
        console.log(this.props.PostStore)
        Axios.post(url,clientInput)
            .then(res => console.log(res))
            Axios.post(`http://localhost:8080/post`,clientInput)
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