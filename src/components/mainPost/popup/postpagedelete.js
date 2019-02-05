// import React, { Component } from 'react'
// import Axios from 'axios';
// // import io from 'socket.io-client'
// // import { observer, inject } from 'mobx-react';
// // const API_URL = 'http://127.0.0.1:8080'
// // const socket = io(API_URL)
// import io from 'socket.io-client'
// const API_URL = 'http://127.0.0.1:8080'
// const socket = io(API_URL)


// // @inject(`PostStore`, `StartPageStore`)
// // @observer
// class MainpostPage extends Component {
//     constructor() {
//         super()
//         this.state = {
//             posts: [],
//         }
//     }


//     getUsers = async () => {

//         let response = await Axios.get(`http://localhost:8080/posts`)
//         this.setState({ posts: response.data })
//     }
//     componentDidMount = async () => {
//         await this.getUsers()
//     }
//     render() {

//         console.log(this.state.posts)
//         return <div>we</div>
//     }

// }

// export default MainpostPage