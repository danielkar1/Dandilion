import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextInput from './TextInput'
import CheckInputs from './CheckInputs'
import Axios from 'axios';
import io from 'socket.io-client'
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@observer
class Post extends Component {
  clickFunc = () => {
    let user = this.state.user
    let url = `${API_URL}/twitter/post?socketId=${socket.id}`
    Axios.post(url, {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      text: `this is diffrent text`
    })
      .then(res => console.log(res))
  }
  render() {
    return (
      <div className="post">
        <TextInput />
        <CheckInputs />
        <button onClick={this.clickFunc}> Post </button>
      </div>
    )
  }
}

export default Post;