import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {
    render() {
      return (
        <div className="navbar">
            <span><Link to="/post">Post</Link></span>
            <span><Link to="/profile">Profile</Link></span>
        </div>
      );
    }
  }
  
  export default Navbar