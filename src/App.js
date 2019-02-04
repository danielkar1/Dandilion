import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Post from './components/mainPost/popup/Post';
import Profile from './components/profilePage/Profile'
import Navbar from './components/Navbar'
import StartPage from './components/startPage/StartPage'
import MainPostPage from './components/mainPost/MainPostPage';


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/profile" exact render={({ match }) => <Profile />} />
          <Route path="/login" exact render={({ match }) => <StartPage loginPage={true}/>} />
          <Route path="/startpage" exact render={({ match }) => <StartPage loginPage={false}/>} />
          <Route path="/mainPost" exact render= {({ match }) => <MainPostPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
