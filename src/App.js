import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/profilePage/Profile'
import Navbar from './components/navbar/Navbar'
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
          <Route path="/startpage" exact render={({ match }) => <StartPage loginPage={false}/>} />
          <Route path="/mainPost" exact render= {({ match }) => <MainPostPage />} />
        </div>
      </Router>
    );
  }
}

export default App;


{/* <div className="PostPage-container"> */}
              
{/* <div className="post-list"><PostList />posts list +   <button><PopUp /></button>
    <div className="post">post one</div>
    <div className="post">post two</div>
    <div className="post">post three</div>
    <div className="post">post four</div>
    <div className="post">post five</div>
</div>
<div className="main">

 <div className="social-icons">
 <i className="icon">icon1</i>
 <i className="icon">icon2</i>
 <i className="icon">icon3</i>
 <i className="icon">icon4</i> 
 </div>
<div className="social-colums-container">
 <div className="social-analytics-table">Facebook</div>
 <div className="social-analytics-table">Twitter</div>
 <div className="social-analytics-table">Instagram</div>
 <div className="social-analytics-table">Linkdin</div>

</div>
</div>
</div> */}