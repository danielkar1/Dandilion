import React, { Component } from 'react'
import Axios from 'axios';
import { observer, inject } from 'mobx-react'
import test_URL from '../../../test_URL'

@inject(`PostStore`, `StartPageStore`, `SocialNetStore`, `MainPostPageStore`)
@observer
class Poster extends Component {
    clickFunc = async() => {
        let getItem= localStorage.getItem("user")
        let userData=JSON.parse(getItem)
        console.log(userData)
        let id= await Axios.post(`${test_URL}/login`, userData)
        .then(res=> id=res.data.id)
        console.log(id)

        let url = `${test_URL}/post`
        let clientInput = {
            networks: this.props.SocialNetStore.networksUsed,
            id: id,
            text: this.props.PostStore.Text,
            img: this.props.PostStore.Image
        }
        console.log(clientInput)
        await Axios.post(url, clientInput)
        .then(res => {
            this.props.MainPostPageStore.addPost(this.props.PostStore.Text, this.props.SocialNetStore.networksUsed)
            this.props.PostStore.deletInput()
            this.closeModal()
           res.end()
            // this.props.PostStore.resetValues()
            })
            .catch(err=>console.log(err))
    }
    closeModal = () => {
        this.props.MainPostPageStore.newPostPopUp.visible = false;
    }

    render() {
        return (
            <button  onClick={this.clickFunc}>
                Post
            </button>
        )
    }
}
export default Poster