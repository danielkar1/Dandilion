import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TextInput from './TextInput'
import CheckInputs from './CheckInputs'
import Axios from 'axios';
import io from 'socket.io-client'
import PostStore from '../../stores/PostStore'
// import ProfileStore from '../../stores/ProfileStore'
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

// @inject(`PostStore`,`ProfileStore`)
@inject('PostStore')
@observer
class Post extends Component {
  clickFunc = () => {
    // let user = this.props.ProfileStore.user
    let url = `${API_URL}/twitter/post?socketId=${socket.id}`
    console.log(url)
    console.log(user)
    console.log(this.props.PostStore)
    Axios.post(url, {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      text: this.props.PostStore.TextInput,
      img: this.props.PostStore.imageInput
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