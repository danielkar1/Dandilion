import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Post from './components/postPage/Post';
import Profile from './components/profilePage/Profile'
import Navbar from './components/Navbar'
import StartPage from './components/startPage/StartPage'
import MainpostPage from './components/postPage/mainPostpage';


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/post" exact render={({ match }) => <Post />} />
          <Route path="/profile" exact render={({ match }) => <Profile />} />
          <Route path="/login" exact render={({ match }) => <StartPage />} />
          <Route path="/startPage" exact render={({ match }) => <StartPage />} />
          <Route path="/posts" exact render={({match}) => <MainpostPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
