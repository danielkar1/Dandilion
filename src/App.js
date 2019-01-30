import React, { Component } from 'react';
import Axios from 'axios';
import io from 'socket.io-client'
// import logo from './logo.svg';
import { observer} from 'mobx-react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Post from './components/postPage/Post';
import Profile from './components/profilePage/Profile'
import Navbar from './components/Navbar'
const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@observer
class App extends Component {
  render() {
    const { name, photo } = this.state.user
    const { disabled } = this.state

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/post" exact render={({ match }) => <Post />}/>
          <Route path="/profile" exact render={({ match }) => <Profile/>}/>

        </div>
      </Router>
    );
  }
}

// export default App;
