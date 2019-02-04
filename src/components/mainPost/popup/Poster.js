import React, { Component } from 'react'
import Axios from 'axios';
// import io from 'socket.io-client'
import { observer, inject } from 'mobx-react'
import test_URL from '../../../test_URL'

// const socket = io(test_URL)

@inject(`PostStore`, `ProfileStore`, `SocialNetStore`)
@observer
class Poster extends Component {
    clickFunc = () => {
        let id = 1
        let url = `${test_URL}/post`
        console.log(url)
        let clientInput = {
            networks: this.props.SocialNetStore.networksUsed,
            id: id,
            text: this.props.PostStore.Text,
            img: this.props.PostStore.Image
        }
        // console.log(clientInput)
        Axios.post(url, clientInput)
            .then(res => {
                this.props.StartPageStore.resetValues()
            })
            .catch(err=>console.log(err))
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