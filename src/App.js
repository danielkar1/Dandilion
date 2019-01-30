import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Post from './components/postPage/Post';
import Profile from './components/profilePage/Profile'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/post" exact render={({ match }) => <Post/>}/>
          <Route path="/profile" exact render={({ match }) => <Profile/>}/>

        </div>
      </Router>
    );
  }
}

export default App;
