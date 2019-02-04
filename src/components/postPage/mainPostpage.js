import React, { Component } from 'react'
import Axios from 'axios';
// import io from 'socket.io-client'
// import { observer, inject } from 'mobx-react';
// const API_URL = 'http://127.0.0.1:8080'
// const socket = io(API_URL)
import io from 'socket.io-client'
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)


// @inject(`PostStore`, `ProfileStore`)
// @observer
class MainpostPage extends Component {
constructor(){
    super()
    this.state={
        posts: [],
    }
}


 getUsers=async ()=>{
    let url = `${API_URL}/posts?socketId=${socket.id}`
    let response = await Axios.get(`${url}/posts`)
  
}
//   componentDidMount= async()=> {

//   // setState inside getUsers instead
//     const response = await this.getUsers()
   
//     this.setState({ response : response.data })
//   }
    render(){
        this.getUsers()
        console.log(this.state.posts)
       return <div>we</div>
    }

}

export default MainpostPage