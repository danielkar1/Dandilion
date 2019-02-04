import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Login from './Login'

@observer
class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar">
        <Link to="/mainPost">Main Post</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/login" onClick={this.locationChange}>Log-in</Link> */}
        <Login />
        <Link to="/signup" >Sign-up</Link>

      </div>
    );
  }
}

export default Navbar