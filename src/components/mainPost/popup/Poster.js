import React, { Component } from 'react'
import Axios from 'axios';
import { observer, inject } from 'mobx-react'
import test_URL from '../../../test_URL'
const sqlOperations= require('./../../../PopulateDb')

@inject(`PostStore`, `StartPageStore`, `SocialNetStore`, `MainPostPageStore`)
@observer
class Poster extends Component {
    clickFunc = () => {
        // id=sqlOperations.getUserId(password,name)
     
        let getItem=localStorage.getItem("user")
        let item=JSON.parse(getItem)
        let id= sqlOperations.getUserId(item.password,item.name)
        console.log(id)
        let url = `${test_URL}/post`
        console.log(url)
        let clientInput = {
            networks: this.props.SocialNetStore.networksUsed,
            id: id,
            text: this.props.PostStore.Text,
            img: this.props.PostStore.Image
        }
        console.log(clientInput)
        Axios.post(url, clientInput)
        .then(res => {
            this.props.MainPostPageStore.addPost(this.props.PostStore.Text, this.props.SocialNetStore.networksUsed)
            this.props.PostStore.deletInput()
            this.closeModal()
            // this.props.PostStore.resetValues()
            })
            .catch(err=>console.log(err))
    }
    closeModal = () => {
        this.props.MainPostPageStore.newPostPopUp.visible = false;
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